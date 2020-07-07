<template>
  <div class="layout-container">
    <van-nav-bar
      ref="navBarRef"
      fixed
      v-bind="navBarProps"
      @click-left="onClickLeft"
      v-on="navBarEvents"
    />
    <div class="main" :style="mainStyle">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <van-tabbar ref="tabbarRef" v-model="currentTab" safe-area-inset-bottom route>
      <van-tabbar-item
        v-for="item in tabList"
        :key="item.to"
        :to="item.to"
        :icon="item.icon"
        replace
      >{{ item.label }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { getRect } from '@/utils/dom'
import { tabConfig } from './config'
export default {
  name: '',
  data () {
    const { clickLeft, clickRight, ...others } = this.$route.meta
    return {
      mainStyle: {},
      navBarProps: { ...others },
      navBarEvents: {
        ...clickLeft && { clickLeft },
        ...clickRight && { clickRight }
      },
      tabList: tabConfig,
      currentTab: tabConfig[0].name
    }
  },
  watch: {
    '$route.path' (newPath, oldPath) {
      if (newPath !== oldPath) {
        const { clickLeft, clickRight, ...others } = this.$route.meta
        this.$set(this, 'navBarProps', { ...others })
        this.$set(this, 'navBarEvents', { ...clickLeft && { clickLeft }, ...clickRight && { clickRight } })
      }
    }
  },
  created () {},
  mounted () {
    this.setMainStyle()
  },
  methods: {
    setMainStyle () {
      this.$nextTick(() => {
        const navBarHeight = getRect(this.$refs.navBarRef.$el, 'height')
        const tabBarHeight = getRect(this.$refs.tabbarRef.$el, 'height')
        this.$set(this, 'mainStyle', { paddingTop: `${navBarHeight}px`, paddingBottom: `${tabBarHeight}px` })
      })
    },
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.layout-container {
  .main {
    overflow: hidden;
  }
}
</style>
