<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <rank />
    <!-- 猜你喜欢 -->
    <like />
    <!--楼层-->
    <floor v-for="floor in floorsList" :key="floor.id" :floor="floor" />
    <!--商标-->
    <brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/home/list-container/index";
import TodayRecommend from "@/pages/home/today-recommend/index";
import rank from "@/pages/home/rank/index";
import like from "@/pages/home/like/index";
import floor from "@/pages/home/floor/index";
import brand from "@/pages/home/brand/index";
import { mapState } from "vuex";
export default {
  name: "home",
  components: { ListContainer, TodayRecommend, rank, like, floor, brand },
  mounted() {
    this.$store.dispatch("home/getfloorsList");
    // this.$store.dispatch("getuserinfo");
  },
  computed: {
    ...mapState({
      floorsList: (state) => {
        return state.home.floorsLists;
      },
    }),
  },
};
</script>

<style scoped lang="less">
</style>