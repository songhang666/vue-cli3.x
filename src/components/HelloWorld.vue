<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-swipe class="hello-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      goods: {
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  mounted(){
    console.log("加载了")
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      height: 800px;
      display: block;
    }
  }
}
</style>
