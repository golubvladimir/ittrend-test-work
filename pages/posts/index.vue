<template>
  <b-container class="blog">
    <b-row>
      <b-col cols="12">
        <title-element label="1">{{ title[lang] }}</title-element>
        <posts-list
          :lang="lang"
          :posts="posts"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import titleElement from '~/components/elements/titleElement';
  import postsList from '~/components/common/postsList';

  export default {
    name: "blog",
    data: function () {
      return {
        title: {
          ru: 'Блог',
          en: 'Blog'
        }
      }
    },
    components: {
      titleElement,
      postsList
    },
    computed: {
      posts() {
        return this.$store.state.posts
      },
      lang() {
        return this.$store.state.lang
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
