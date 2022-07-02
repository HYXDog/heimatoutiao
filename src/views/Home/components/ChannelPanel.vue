<template>
  <div>
    <div class="channel-container">
      <div class="title">
        <h3>我的频道</h3>
        <van-button
          size="mini"
          plain
          type="danger"
          round
          @click="isCloseShow = !isCloseShow"
          >{{ isCloseShow ? "完成" : "编辑" }}</van-button
        >
      </div>
      <van-row>
        <van-col span="6" v-for="(item, index) in channels" :key="item.id"
          ><div
            class="inner"
            :style="{ color: active === index ? 'red' : '' }"
            @click="onClick(index)"
          >
            {{ item.name }}
            <van-icon
              name="close"
              v-if="index !== 0"
              :style="{ color: active === index ? 'red' : '' }"
              v-show="isCloseShow"
            /></div
        ></van-col>
      </van-row>
    </div>
    <!-- 推荐频道 -->
    <div class="channel-container">
      <div class="title">
        <h3>我的频道</h3>
        <van-button size="mini" plain type="danger" round></van-button>
      </div>
      <van-row>
        <van-col span="6" v-for="item in recommendChannelse" :key="item.id"
          ><div class="inner van-ellipsis" @click="add(item.id)">
            +{{ item.name }}
          </div></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
import { getAllArticleList, saveChannels, setItem } from '@/api/home'
const CHANNELS = 'CHANNELS'
export default {
  name: 'ChannelPanel',
  props: {
    channels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  async created () {
    try {
      const res = await getAllArticleList()
      this.recommendChannelse = res.data.data.channels.filter(item => this.channels.every(item1 => item1.id !== item.id))
      console.log(this.recommendChannelse)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      recommendChannelse: [],
      isCloseShow: false
    }
  },
  methods: {
    add (id) {
      const index = this.recommendChannelse.findIndex(item => item.id === id)
      this.channels.push(this.recommendChannelse[index])
      this.recommendChannelse.splice(index, 1)
    },
    onClick (index) {
      if (this.isCloseShow) {
        if (index === 0) {
          return
        }
        // 删除
        const obj = this.channels[index]
        this.channels.splice(index, 1)
        this.recommendChannelse.push(obj)
        if (index < this.active) {
          this.$emit('del-event', this.active - 1)
        }
      } else {
        this.$emit('change-active', index)
      }
    }
  },
  computed: {},
  watch: {
    channels: {
      async handler (newVal) {
        if (this.$store.state.user && this.$store.state.user.token) {
          const arr = []
          newVal.forEach((item, index) => {
            arr.push({ id: item.id, seq: index })
          })
          console.log(arr)
          try {
            const res = await saveChannels(arr)
            console.log(res)
          } catch (err) {
            console.log(err)
          }
        } else {
          setItem(CHANNELS, newVal)
        }
      },
      deep: true// 深度监听
    }
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.channel-container {
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-right: 16px;
    padding-left: 24px;
    h3 {
      font-size: 32px;
      font-weight: normal;
      color: #333;
    }
    .van-button {
      width: 104px;
      height: 48px;
      border-radius: 20px;
    }
  }
}
.inner {
  width: 160px;
  height: 86px;
  background-color: #f4f5f6;
  border-radius: 6px;
  font-size: 28px;
  font-weight: normal;
  color: #222;
  text-align: center;
  line-height: 86px;
  margin-left: 14px;
  position: relative;
  .van-icon-close {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
}
.van-col {
  margin-bottom: 10px;
}
</style>
