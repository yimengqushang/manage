// 1. 导入request
import request from '@/util/http.js'

export const getShopInfo = () => {
    return request({
        url: '/product',
    })
}