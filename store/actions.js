import * as types from './mutationTypes'
import {
  saveSearch,
}
  from '@/tools/cache'

//设置群组
export const setSearch = function ({
  commit,
  state
}, query) {
  commit(types.SET_SEARCH, saveSearch(query))
}
