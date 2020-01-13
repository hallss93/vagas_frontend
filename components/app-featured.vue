<template>
  <section class="container">
    <div class="app-featured-container">
      <h1 class="title">Marcas do app em destaque</h1>
      <div class="row">
        <div class="row col-6 justify-space-between pr-50">
          <div
            v-for="(f, fIndex) in 3"
            :key="`feature-${fIndex}`"
            class="feature"
          >
            <h2 class="title">Título</h2>
            <h3 class="description">
              Marcação de texto para ser preenchida depois da página ficar
              pronta, enquanto isso segue com o texto marcando a página.
            </h3>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div
              v-for="card in cards"
              :key="`card-mini-${card.index}`"
              :class="card.color"
              class="card mini background"
            >
              <img
                class="logo-mini"
                src="@/assets/imgs/logo-placeholder-2-x.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AppFeatured',
  data() {
    return {
      cards: [
        {
          index: 0,
          color: 'dodger-blue'
        },
        {
          index: 1,
          color: 'white'
        },
        {
          index: 2,
          color: 'white'
        },
        {
          index: 3,
          color: 'white'
        },
        {
          index: 4,
          color: 'white'
        },
        {
          index: 5,
          color: 'vermilion'
        },
        {
          index: 6,
          color: 'white'
        },
        {
          index: 7,
          color: 'white'
        },
        {
          index: 8,
          color: 'white'
        },
        {
          index: 9,
          color: 'white'
        },
        {
          index: 10,
          color: 'medium-purple'
        },
        {
          index: 11,
          color: 'white'
        },
        {
          index: 12,
          color: 'white'
        },
        {
          index: 13,
          color: 'white'
        },
        {
          index: 14,
          color: 'white'
        },
        {
          index: 15,
          color: 'school-bus-yellow'
        }
      ]
    }
  }
}
</script>
