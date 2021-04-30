import * as types from './mutationTypes'
import {
  saveSearch,
}
  from '@/tools/cache'

// 保存搜索key
export const setSearch = function ({
  commit,
  state
}, query) {
  commit(types.SET_SEARCH, saveSearch(query))
}
