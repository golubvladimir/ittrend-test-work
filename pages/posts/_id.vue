<template>
  <b-container class="post">
    <b-row>
      <b-col cols="12">
        <title-element label="1">{{ post.title[lang] }}</title-element>
        <p>
          {{ post.content[lang] }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import titleElement from '~/components/elements/titleElement'

  export default {
    name: "blog-id",
    computed: {
      lang() {
        return this.$store.state.lang
      },
      post() {
        return this.$store.state.currentPost
      }
    },
    beforeCreate() {
      this.$store.dispatch('getSelectPost', {id: this.$nuxt.$route.path.split('/')[2]});
    },
    components: {
      titleElement
    }
  }
</script>

<style scoped>

</style>
