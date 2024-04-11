export const settoken = (token) => {
    localStorage.setItem('Token', token)
}
export const gettoken = () => {
    return localStorage.getItem('Token')
}
export const removetoken = () => {
    localStorage.removeItem('Token')
}



