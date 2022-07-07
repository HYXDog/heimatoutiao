<template>
  <van-icon
    color="#777"
    :name="giveLike ? 'good-job' : 'good-job-o'"
    @click="btnLike"
  />
</template>

<script>
import { delGiveLike, addGiveLike } from '@/api/article'
export default {
  name: 'GiveLike',
  props: {
    giveLike: {
      type: Boolean,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {
    async btnLike () {
      if (this.giveLike) {
        try {
          await delGiveLike(this.$route.params.article_id)
          this.$emit('update:giveLike', !this.giveLike)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await addGiveLike(this.$route.params.article_id)
          this.$emit('update:giveLike', !this.giveLike)
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
