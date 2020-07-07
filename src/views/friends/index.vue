<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <router-link v-for="item in list" :key="item" :to="{ name: 'FriendDetail', params: { id: item } }">
          <van-cell :title="item"/>
        </router-link>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'Friends',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  created () {},
  mounted () {},
  beforeRouteLeave (to, from, next) {
    if (to.name === 'FriendDetail') {
      from.meta.keepAlive = true
    }
    next()
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 60) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
