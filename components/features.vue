<template>
  <div class="container features">
    <div class="row justify-evenly">
      <div v-for="(c, cIndex) in cards" :key="`card-${cIndex}`" class="col-4">
        <card
          :alt="c.alt"
          :icon="c.icon"
          :title="c.title"
          :description="c.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          alt: 'Graph',
          icon: 'group-33.png',
          title: 'Título 1',
          description:
            'Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.'
        },
        {
          alt: 'Graph',
          icon: 'alarm-clock-2.png',
          title: 'Título 2',
          description:
            'Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.'
        },
        {
          alt: 'Graph',
          icon: 'ic-notifications-none.png',
          title: 'Título 3',
          description:
            'Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.'
        }
      ]
    }
  }
}
</script>
