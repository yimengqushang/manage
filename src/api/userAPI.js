// 1. 导入request
import request from '@/util/http.js'

export const getUserInfo = () => {
    return request({
        url: '/user',
    })
}