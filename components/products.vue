<template>
  <section class="product-container">
    <div class="mb-10 ml-80 mr-80 row justify-space-between">
      <h1 class="title medium">Produtos mais acessados.</h1>
      <h4 class="malachite pointer">Ver todos</h4>
    </div>
    <div class="row justify-space-between">
      <div @click="mySwiper.slidePrev()" class="swiper-button prev">
        <img src="@/assets/imgs/ic-navigate-next.png" class="prev" alt="" />
      </div>
      <div class="swiper-body">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              v-for="(p, index) in productsAll"
              :key="index"
              class="swiper-slide"
            >
              <div class="card product">
                <span
                  :class="{ down: p.down, up: p.up, stay: p.stay }"
                  class="percentage"
                  ><img v-if="p.down" src="@/assets/imgs/triangle-copy.png" />
                  <img
                    v-else-if="p.up"
                    src="@/assets/imgs/triangle-copy_2.png"
                  />
                  <img
                    v-else-if="p.stay"
                    src="@/assets/imgs/triangle-copy.png"
                  />
                  $ {{ p.percentage }}</span
                >
                <img :src="p.image" :alt="p.image" class="img-product" />
                <h4 class="product-name">{{ p.title }}</h4>
                <h5 class="product-store">
                  Vendido por <span class="store-name">{{ p.store.name }}</span>
                </h5>
                <h2 class="product-price">{{ p.price }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div @click="mySwiper.slideNext()" class="swiper-button next">
        <img src="@/assets/imgs/ic-navigate-next.png" class="next" alt="" />
      </div>
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
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: false
      }
    }
  },
  created() {
    if (process.browser) {
      if (document.body.offsetWidth < 768) this.swiperOption.slidesPerView = 2 // eslint-disable-line
    }
    this.fetchStores()
  },
  methods: {
    _reduceString(str) {
      return str.length > 50 ? `${str.substring(0, 50)}...` : str
    },
    _fixed(num, float) {
      return parseFloat(num).toFixed(float)
    },
    _money(num) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(num)
    },
    _calcPercentage(value, percentage) {
      const minus = value * (percentage / 100)
      return minus
    },
    async fetchProducts() {
      const { data, status } = await products.getProducts()
      if (status === 200) {
        data.map((p) => {
          const title = this._reduceString(p.title)
          const percentage = this._fixed(
            this._calcPercentage(p.price, p.percentage),
            0
          )
          this.productsAll.push({
            ...p,
            title,
            price: this._money(this._fixed(p.price, 2)),
            percentage,
            pp: p.percentage,
            up: p.percentage > 0,
            down: p.percentage < 0,
            stay: p.percentage === 0,
            store: this.storesAll.find((el) => p.storeid === el.id)
          })
        })
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
