import {
  loadSearch,
} from '@/tools/cache'

const state = {
  searchKey: loadSearch(), //获取群组消息
  
  hasLogin: false,
  userInfo: {},
}

export default state
