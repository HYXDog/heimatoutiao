<template>
  <div>
    <van-cell-group>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- <van-cell
            :title="item.title"
            value="内容"
            label="描述信息"
            v-for="(item, index) in articleList"
            :key="index"
          /> -->
          <ArticleItem
            v-for="(item, index) in articleList"
            :key="index"
            :article="item"
          ></ArticleItem>
        </van-list>
      </van-pull-refresh>
    </van-cell-group>
  </div>
</template>

<script>
import { getArticleList } from '@/api/home'
import ArticleItem from './ArticleItem.vue'
export default {
  name: 'ArticleList',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created () {
    this.getArticleList()
  },
  data () {
    return {
      timestamp: Date.now(),
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    async getArticleList () {
      if (this.refreshing) {
        this.articleList = []
        this.refreshing = false
      }
      try {
        const res = await getArticleList({
          channel_id: this.id, timestamp: this.timestamp
        })
        console.log(res)
        this.timestamp = res.data.data.pre_timestamp
        if (this.timestamp === null) {
          this.finished = true
        }
        this.articleList.push(...res.data.data.results)
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      this.getArticleList()
    },
    onRefresh () {
      this.finished = false
      this.loading = true
      this.timestamp = Date.now()
      this.getArticleList()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  // eslint-disable-next-line vue/no-unused-components
  components: { ArticleItem }
}
</script>

<style scoped lang='less'>
.van-cell-group {
  margin-top: 174px;
}
</style>
