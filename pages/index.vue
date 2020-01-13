<template>
  <div>
    <div class="container">
      <navbar />
      <app-info />
    </div>
    <features />
    <video-player />
    <app-featured />
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import AppInfo from '~/components/app-info.vue'
import Features from '~/components/features.vue'
import VideoPlayer from '~/components/video.vue'
import AppFeatured from '~/components/app-featured.vue'

export default {
  components: {
    Navbar,
    AppInfo,
    Features,
    VideoPlayer,
    AppFeatured
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/root.scss';
</style>
