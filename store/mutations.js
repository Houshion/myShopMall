import * as types from './mutationTypes'

const mutations = {
  [types.SET_SEARCH](state, searchKey) {
    state.searchKey = searchKey
  },
  
  login(state, provider) {
    state.hasLogin = true;
    state.userInfo = provider;
    uni.setStorage({//缓存用户登陆状态
      key: 'userInfo',
      data: provider
    })
    console.log(state.userInfo);
  },
  logout(state) {
    state.hasLogin = false;
    state.userInfo = {};
    uni.removeStorage({
      key: 'userInfo'
    })
  }
}

export default mutations
