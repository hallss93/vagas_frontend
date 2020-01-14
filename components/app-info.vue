<template>
  <div :class="{ 'flex-reverse': reverse }" class="row">
    <div class="col-6 app-info">
      <h1 class="title">{{ title }}</h1>
      <h3 class="description">
        {{ description }}
      </h3>
      <div class="buttons-container">
        <img
          src="@/assets/imgs/google-play.png"
          class="image-mockup"
          alt="Play Store"
        />
        <img
          class="image-mockup"
          src="@/assets/imgs/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png"
          alt="Play Store"
        />
      </div>
    </div>

    <div class="col-6">
      <img
        v-if="!reverse"
        src="@/assets/imgs/group-9.png"
        class="image-mockup"
        alt="Mockup App"
      />
      <img
        v-else
        src="@/assets/imgs/group-11.png"
        class="image-mockup"
        alt="Mockup App"
      />
    </div>
  </div>
</template>
<script>
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
  }
}
</script>
