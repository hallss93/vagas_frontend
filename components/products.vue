<template>
  <section class="container">
    <h1 class="title medium">Produtos mais acessados.</h1>

    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(p, index) in productsAll"
          :key="index"
          class="swiper-slide"
        >
          {{ index }}
        </div>
      </div>
      <div
        slot="button-prev"
        @click="mySwiper.slidePrev()"
        class="swiper-button-prev"
      ></div>
      <div
        slot="button-next"
        @click="mySwiper.slideNext()"
        class="swiper-button-next"
      ></div>
    </div>
  </section>
</template>
<script>
import products from '@/assets/js/api/products'
import stores from '@/assets/js/api/stores'
export default {
  name: 'AppInfo',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      productsAll: [],
      storesAll: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  created() {
    this.fetchStores()
  },
  methods: {
    async fetchProducts() {
      const { data, status } = await products.getProducts()
      if (status === 200) {
        const newArray = data.map(
          (p) => (p.store = this.storesAll.find((el) => p.storeid === el.id))
        )
        this.productsAll = newArray
      }
    },
    async fetchStores() {
      const { data, status } = await stores.getStores()
      if (status === 200) {
        this.storesAll = data
        this.fetchProducts()
      }
    }
  }
}
</script>
