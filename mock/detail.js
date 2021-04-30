let demoList = {
    code: 200,
    msg: 'success',
    data: {
        'image|1': [
            'https://printchaintest.hucai.com/h5/shopImg/ic_11.jpg',
            'https://printchaintest.hucai.com/h5/shopImg/ic_12.jpg',
            'https://printchaintest.hucai.com/h5/shopImg/ic_13.jpg',
            'https://printchaintest.hucai.com/h5/shopImg/ic_14.jpg',
            'https://printchaintest.hucai.com/h5/shopImg/ic_15.jpg',
            'https://printchaintest.hucai.com/h5/shopImg/ic_16.jpg',
        ],
        'content': '@cparagraph(),@paragraph(),@cparagraph(),@paragraph()',
        'price': '@integer(1,200)',
        'sale': '@integer(1,200)',
        'createTime': "@datetime()",
        'id': '@guid',
        'name': '套餐@integer(1,50)，@csentence(5)',
        'desc': '@csentence(15)',
    }
};
export default {
    'get|/parameter/query/detail': demoList
}