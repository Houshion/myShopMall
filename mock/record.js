let demoList = {
    code: 200,
    msg: 'success',
    data: {
        total: 100,
        current: 1,
        size: 10,
        pages: 1,
        'records|10': [{
            'award': '@integer(1,200)',
            'phoneNumber': /1\d{10}/,
            createTime: "@datetime()",
            id: '@guid',
            'name|1': ['专属海报', '促销海报', '专属链接', '通证红包'],
            'unit|1': ['XM', 'TP', 'HBB'],
        }]
    }
};
let detailList = {
    code: 200,
    msg: 'success',
    data: {
        total: 100,
        current: 1,
        size: 10,
        pages: 1,
        'records|10': [{
            'award': '@integer(1,200)',
            'phoneNumber': /1\d{10}/,
            createTime: "@datetime()",
            id: '@guid',
            'type|1': ['收入', '支出'],
            'unit|1': ['XM', 'TP', 'HBB'],
        }]
    }
};
export default {
    'get|/member/list': demoList,
    'get|/detail/list': detailList,
}