import Vue from 'vue'
import MainSkeleton from './MainSkeleton'

export default new Vue({
  components: {
    MainSkeleton
  },
  template: `
    <div>
      <main-skeleton id="main-skeleton" style="display:none"/>
    </div>
  `
})
