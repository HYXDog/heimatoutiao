<template>
  <div>
    <van-nav-bar title="登录" @click-left="$router.back()">
      <van-icon name="cross" slot="left"></van-icon>
    </van-nav-bar>
    <!-- 表单 -->
    <van-form @submit="onSubmit" ref="from">
      <van-field
        v-model="mobile"
        name="mobile"
        label="请输入手机号"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '不符合手机的格式' },
        ]"
      >
        <!-- <i class="toutiao toutiao-shouji" slot="left-icon"></i> -->
        <Myicon name="shouji" slot="left-icon"></Myicon>
      </van-field>
      <van-field
        v-model="code"
        type="password"
        name="code"
        label="请输入验证码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /\d{6}$/, message: '验证码长度必须是6位' },
        ]"
      >
        <!-- <i class="toutiao toutiao-yanzhengma" slot="left-icon"></i> -->
        <Myicon name="yanzhengma" slot="left-icon"></Myicon>
        <template #button>
          <van-count-down
            :time="time"
            format="ss s"
            @finish="flag = false"
            v-if="flag"
          />
          <van-button native-type="button" @click="onSendSms" v-else
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          class="login-btn"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { getSmsCode, login } from '@/api/user'
import Myicon from '@/components/Myicon.vue'
export default {
  created () { },
  data () {
    return {
      mobile: '',
      code: '246810',
      time: 5 * 1000,
      flag: false
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      try {
        const res = await login(values)
        this.$store.commit('setUser', res.data.data)
        // 跳转到我的
        this.$router.push({ name: 'my' })
      } catch (error) {
        console.log(error)
      }
    },

    async onSendSms () {
      try {
        await this.$refs.from.validate('mobile')
        this.flag = true
        try {
          await getSmsCode(this.mobile)
        } catch (error) {
          console.log(error)
        }
      } catch (error) {
        console.log(error)
        console.log('校验失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { Myicon }
}
</script>

<style scoped lang='less'>
.toutiao {
  font-size: 37px;
}
.yzm {
  width: 152px;
  height: 46px;
  background-color: #ededed;
  border-radius: 23px;
  font-size: 22px;
  color: #666;
  .van-button__text {
    zoom: 0.96;
  }
  .login-btn {
    width: 694px;
    height: 88px;
    background-color: #6db4fb;
    border-radius: 10px;
    font-size: 30px;
    color: #ffffff;
  }
}
</style>
