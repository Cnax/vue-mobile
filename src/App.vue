<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      obj: { a: 1 }
    }
  },
  created () {
    console.log('object :>> ', this.obj?.a)
  }
}
</script>
