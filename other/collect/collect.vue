<template>
  <view>
    <view
      v-for="(item, index) in tabItem.orderList"
      :key="index"
      class="order-item"
    >
      <view class="i-top b-b">
        <text class="time">{{ item.time }}</text>
        <text class="state" :style="{ color: item.stateTipColor }">{{
          item.stateTip
        }}</text>
        <text
          v-if="item.state === 9"
          class="del-btn yticon icon-iconfontshanchu1"
          @click="deleteOrder(index)"
        ></text>
      </view>

      <scroll-view v-if="item.goodsList.length > 1" class="goods-box" scroll-x>
        <view
          v-for="(goodsItem, goodsIndex) in item.goodsList"
          :key="goodsIndex"
          class="goods-item"
        >
          <image
            class="goods-img"
            :src="goodsItem.image"
            mode="aspectFill"
          ></image>
        </view>
      </scroll-view>
      <view
        v-if="item.goodsList.length === 1"
        class="goods-box-single"
        v-for="(goodsItem, goodsIndex) in item.goodsList"
        :key="goodsIndex"
      >
        <image
          class="goods-img"
          :src="goodsItem.image"
          mode="aspectFill"
        ></image>
        <view class="right">
          <text class="title clamp">{{ goodsItem.title }}</text>
          <text class="attr-box"
            >{{ goodsItem.attr }} x {{ goodsItem.number }}</text
          >
          <text class="price">{{ goodsItem.price }}</text>
        </view>
      </view>

      <view class="price-box">
        共
        <text class="num">7</text>
        件商品 实付款
        <text class="price">143.7</text>
      </view>
      <view class="action-box b-t" v-if="item.state != 9">
        <button class="action-btn" @click="cancelOrder(item)">取消订单</button>
        <button class="action-btn recom">立即支付</button>
      </view>
    </view>

    <uni-load-more :status="tabItem.loadingType"></uni-load-more>
  </view>
</template>

<script>
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
import empty from "@/components/empty";
import Json from "@/Json";
export default {
  components: {
    uniLoadMore,
    empty,
  },
  data() {
    return {};
  },
  onLoad() {
    // this.loadData();
  },
  methods: {
    //获取订单列表
    loadData() {
      //这里是将订单挂载到tab列表下

      setTimeout(() => {
		  let orderList = Json.orderList.filter((item) => {
			console.log("item", item);
          //添加不同状态下订单的表现形式
          item = Object.assign(item, this.orderStateExp(item.state));
          //演示数据所以自己进行状态筛选
          if (state === 0) {
            //0为全部订单
            return item;
          }
          return item.state === state;
        });
        orderList.forEach((item) => {
          navItem.orderList.push(item);
        });
        //loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
        this.$set(navItem, "loaded", true);

        //判断是否还有数据， 有改为 more， 没有改为noMore
        navItem.loadingType = "more";
      }, 600);
    },

    //订单状态文字和颜色
    orderStateExp(state) {
      let stateTip = "",
        stateTipColor = "#fa436a";
      switch (+state) {
        case 1:
          stateTip = "待付款";
          break;
        case 2:
          stateTip = "待发货";
          break;
        case 9:
          stateTip = "订单已关闭";
          stateTipColor = "#909399";
          break;

        //更多自定义
      }
      return { stateTip, stateTipColor };
    },
  },
};
</script>

<style lang="scss">
</style>
