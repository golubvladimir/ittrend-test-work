<template>
  <b-card
    class="card"
    :title="title"
  >
    <b-card-text class="card__content">
      {{ content }}
    </b-card-text>

    <nuxt-link class="card__link" :to="'/posts/'+id">{{ linkTitle[lang] }}</nuxt-link>
  </b-card>
</template>

<script>
  export default {
    name: "cardElement",
    data: function() {
      return {
        linkTitle: {
          ru: 'Подробнее',
          en: 'More'
        }
      }
    },
    props: {
      id: String,
      title: String,
      content: String,
    },
    computed: {
      lang() {
        return this.$store.state.lang
      }
    },
  }
</script>

<style scoped>

</style>
