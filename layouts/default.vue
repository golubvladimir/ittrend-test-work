<template>
  <div>
    <header-element />
    <nuxt/>
    <footer-element />
  </div>
</template>

<script>
  import headerElement from '~/components/common/headerElement';
  import footerElement from '~/components/common/footerElement';

  export default {
    components: {
      headerElement,
      footerElement
    }
  }
</script>

<style>

</style>

