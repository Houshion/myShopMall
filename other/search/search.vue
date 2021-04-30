<template>
  <view id="search">
    <view class="pd_10">
      <u-search
        bg-color="#ffffff"
        v-model="keyword"
        :clearabled="true"
        :show-action="true"
        action-text="搜索"
        :animation="true"
        @search="onSearch"
        @custom="onSearch"
      ></u-search>
    </view>
    <view class="resultBox">
      <view class="title flex_between">
        <view>历史搜索</view>
        <u-icon name="trash" size="48"></u-icon>
      </view>
      <view class="historySearch flex">
        <template v-for="(item, index) in searchKeys">
          <view class="items" :key="index">{{ item }}</view>
        </template>
      </view>
    </view>
  </view>
</template>
 
<script>
import store from "@/store";
import { loadSearch } from "@/tools/cache";
export default {
  name: "search",
  data() {
    return {
      keyword: "",
      searchKeys: loadSearch() || [],
    };
  },
  components: {},
  created() {},
  methods: {
    onSearch(key) {
      let setData = new Set(store.getters.searchKey);
      setData.add(key);
      store.dispatch("setSearch", [...setData]);
    },
  },
};
</script>
 
<style scoped lang="scss">
#search {
  min-height: 100vh;
  background: #f5f5f5;
  .searchBtn {
    background: $main-color;
    color: #ffffff;
  }
  .resultBox {
    padding: 20upx;
    background: #ffffff;
    .title {
    }
    .historySearch {
      .items {
        margin: 30upx 10upx 0 10upx;
        padding: 10upx 20upx;
        background: #f5f5f5;
        color: #333333;
        border-radius: 30px;
      }
    }
  }
}
</style>