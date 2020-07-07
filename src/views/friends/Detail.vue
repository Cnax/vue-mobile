<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'FriendDetail',
  created () {
    console.log('object :>> ', this.$route.params.id)
  }
}
</script>
