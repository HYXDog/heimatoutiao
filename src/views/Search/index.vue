<template>
  <div>
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索关键词"
      background="#3296fa"
      @cancel="$router.go(-1)"
      @search="isSearch = true"
      autofocus
      @focus="isSearch = false"
    />
    <SearchHistory v-if="searchText === ''" @search="onSearch"></SearchHistory>
    <template v-else>
      <SearchResult v-if="isSearch" :searchText="searchText"></SearchResult>
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onSearch"
      ></SearchSuggest>
    </template>
  </div>
</template>

<script>
import SearchHistory from './components/SearchHistory.vue'
import SearchResult from './components/SearchResult.vue'
import SearchSuggest from './components/SearchSuggest.vue'
export default {
  created () { },
  data () {
    return {
      searchText: '',
      isSearch: false
    }
  },
  methods: {
    onSearch (str) {
      this.searchText = str
      this.isSearch = true
      this.$store.commit('searchHistoryList', str)
    }
  },
  computed: {},
  watch: {

  },
  filters: {},
  components: {
    SearchHistory,
    SearchResult,
    SearchSuggest
  }

}
</script>

<style scoped lang='less'>
</style>
