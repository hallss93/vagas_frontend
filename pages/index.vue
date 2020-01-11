<template>
  <div class="container">
    <navbar />
    <app-info />
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import AppInfo from '~/components/app-info.vue'

export default {
  components: {
    Navbar,
    AppInfo
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/root.scss';
</style>
