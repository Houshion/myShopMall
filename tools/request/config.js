// 配置公共url
let baseUrl = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    baseUrl = 'http://192.172.31.161'
}else{
    // 生产环境
    baseUrl = 'http://192.172.31.161'
}

export default baseUrl