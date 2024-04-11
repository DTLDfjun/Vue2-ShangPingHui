<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageinfo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startnumandendnum.start > 1"
      @click="$emit('getPageinfo', 1)"
      :class="{ acitve: pageNo == 1 }"
    >
      1
    </button>

    <button v-if="startnumandendnum.start > 2">•••</button>
    <button
      v-for="(page, index) in startnumandendnum.end"
      :key="index"
      v-show="page >= startnumandendnum.start"
      @click="$emit('getPageinfo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>
    <button v-if="startnumandendnum.end < totalPage - 1">•••</button>
    <button
      v-if="startnumandendnum.end < totalPage"
      @click="$emit('getPageinfo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageinfo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>
  
  <script>
export default {
  name: "pagesaction",
  props: ["pageNo", "pageSize", "continues", "total"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startnumandendnum() {
      const { continues, pageNo, totalPage } = this;
      //先定义两个变量存储起始数字与结束数字
      let start = 0;
      let end = 0;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        } else if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
};
</script>
  
  <style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
  