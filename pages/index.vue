<template>
  <div>
    <header id="Header" class="container">
      <navbar />
      <app-info
        title="Título da página"
        description="Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades."
      />
    </header>
    <features />
    <video-player />
    <app-featured />
    <section class="container">
      <app-info
        :reverse="true"
        title="Título"
        description="Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades."
      />
    </section>
    <products :products="storesAll" />
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import AppInfo from '~/components/app-info.vue'
import Features from '~/components/features.vue'
import VideoPlayer from '~/components/video.vue'
import AppFeatured from '~/components/app-featured.vue'
import Products from '~/components/products.vue'

export default {
  components: {
    Navbar,
    AppInfo,
    Features,
    VideoPlayer,
    AppFeatured,
    Products
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/root.scss';
</style>
