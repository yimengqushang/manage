// 引入 axios
import axios from 'axios'
// 封装 baseURL
const request = axios.create({
        baseURL: "http://127.0.0.1:4523/m1/2891381-0-default"
    })
    // 向外暴露 request
export default request;