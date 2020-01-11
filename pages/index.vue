<template>
  <div>
    <div class="container">
      <navbar />
      <app-info />
    </div>
    <features />
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import AppInfo from '~/components/app-info.vue'
import Features from '~/components/features.vue'

export default {
  components: {
    Navbar,
    AppInfo,
    Features
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/root.scss';
</style>
