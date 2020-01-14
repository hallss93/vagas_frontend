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
    <section id="app-info-r" class="container">
      <app-info
        :reverse="true"
        title="Título"
        description="Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades."
      />
    </section>
    <products :products="storesAll" />
    <app-footer />
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import AppInfo from '~/components/app-info.vue'
import Features from '~/components/features.vue'
import VideoPlayer from '~/components/video.vue'
import AppFeatured from '~/components/app-featured.vue'
import Products from '~/components/products.vue'
import AppFooter from '~/components/app-footer.vue'

export default {
  components: {
    Navbar,
    AppInfo,
    Features,
    VideoPlayer,
    AppFeatured,
    Products,
    AppFooter
  },
  created() {
    if (process.browser) {
      /* Navbar */
      const logo = document.querySelector('#navbar > div:nth-child(1) > img') // eslint-disable-line
      const profile = document.querySelector('#profile-controls') // eslint-disable-line

      logo.style.left = '0px'
      logo.style.opacity = '1'
      profile.style.opacity = '1'

      const mockup = document.querySelector('#Header > div > div:nth-child(2) > img') // eslint-disable-line
      mockup.style.marginTop = '0px'
      mockup.style.opacity = '1'

      onscroll = function(el) {
        const Height = window.innerHeight // eslint-disable-line
        /* App-Info */
        const mockup2 = document.querySelector('#app-info-r > div > div:nth-child(2) > img') // eslint-disable-line

        /* Features */
        const cards = document.querySelectorAll('#__layout > div > div > section.container.features > div > div') // eslint-disable-line

        /* Featured */
        const minCards = document.querySelectorAll('#show-icons > div > div.card.mini.background.white') // eslint-disable-line
        const minCardsColors = document.querySelectorAll('#show-icons > div > div.card.mini.background:not(.white)') // eslint-disable-line
        const firstCard = [...cards][0]
        const secondCard = [...cards][1]
        const thirdCard = [...cards][2]

        if (mockup2.getBoundingClientRect().top - Height <= -200) {
          mockup2.style.marginLeft = '0px'
          mockup2.style.opacity = '1'
        }

        if (firstCard.getBoundingClientRect().top - Height <= -200) {
          firstCard.style.opacity = '1'
          secondCard.style.opacity = '1'
          thirdCard.style.opacity = '1'
        }

        if ([...minCards][0].getBoundingClientRect().top - Height <= -100) {
          let time = 0
          ;[...minCardsColors].map((min) => {
            setTimeout(() => {
              min.style.opacity = '1'
            }, time)
            time = 50 + time
          })
          time = 200 + time
          setTimeout(() => {
            ;[...minCards].map((min) => {
              setTimeout(() => {
                min.style.opacity = '1'
              }, time)
              time = 50 + time
            })
          }, time)
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/root.scss';
</style>
