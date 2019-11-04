<template>
  <div class="posts-list">
    <post-element
      class="posts-list__item"
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title[lang]"
      :content="post.content[lang]"
    />
  </div>
</template>

<script>
  import postElement from '~/components/common/postElement';

  export default {
    name: "postsList",
    components: {
      postElement
    },
    props: {
      posts: Array,
      lang: String
    }
  }
</script>

<style lang="scss" scoped>
  .posts-list {
    &__item {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
