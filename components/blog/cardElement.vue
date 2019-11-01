<template>
  <b-card
    class="card"
    :title="title"
  >
    <b-card-text class="card__content">
      {{ content }}
    </b-card-text>

    <nuxt-link class="card__link" :to="id">Подробнее</nuxt-link>
  </b-card>
</template>

<script>
  export default {
    name: "cardElement",
    props: {
      id: String,
      title: String,
      content: String,
    }
  }
</script>

<style scoped>

</style>
