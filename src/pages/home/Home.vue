<template>
  <div class="home-wrapper">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from '@/components/Home/Header'
export default {
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
}
</style>
