<template>
  <div class="card">
    <img
      :src="require(`@/assets/imgs/${icon}`)"
      :alt="alt"
      class="card-image"
    />
    <h2 class="title">Título</h2>
    <h6 class="description">
      Texto corrido com informações que vão ser preenchidas depois que a página
      estiver pronta.
    </h6>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    icon: {
      type: String,
      default: 'group-33.png'
    },
    alt: {
      type: String,
      default: 'Icon'
    }
  }
}
</script>
