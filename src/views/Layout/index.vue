<template>
  <div>
    <keep-alive :include="['Home']">
      <router-view class="main"></router-view>
    </keep-alive>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="home-o" class="active-color"
        >首页<i class="toutiao toutiao-shouye" slot="icon"></i
      ></van-tabbar-item>
      <van-tabbar-item to="/video" icon="search"
        >视频<i class="toutiao toutiao-shipin" slot="icon"></i
      ></van-tabbar-item>
      <van-tabbar-item to="/question" icon="friends-o"
        >问答<i class="toutiao toutiao-wenda" slot="icon"></i
      ></van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o"
        >我的<i class="toutiao toutiao-wode" slot="icon"></i
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .toutiao {
  font-size: 40px !important;
}
/deep/ .van-tabbar-item__text {
  font-size: 20px !important;
}
.main {
  background-color: #f5f7f9;
  padding-bottom: 100px;
}
</style>
