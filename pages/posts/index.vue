<template>
  <b-container class="blog">
    <b-row>
      <b-col cols="12">
        <title-element>Блог</title-element>
        <div class="blog__list">
          <card-element
            class="blog__item"
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :title="post.title"
            :content="post.content"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import titleElement from '~/components/elements/titleElement';
  import cardElement from '~/components/blog/cardElement';

  export default {
    name: "blog",
    components: {
      cardElement,
      titleElement
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog {
    &__item {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
