<template>
  <div>
    <header-element />
    <nuxt/>
    <footer-element />
  </div>
</template>

<script>
  import headerElement from '~/components/layout/headerElement';
  import footerElement from '~/components/layout/footerElement';

  export default {
    components: {
      headerElement,
      footerElement
    }
  }
</script>

<style>

</style>

