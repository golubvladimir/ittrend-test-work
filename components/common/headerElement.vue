<template>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand tag="h1" class="mb-0">Blog on Nuxt.js</b-navbar-brand>
    <b-navbar-nav>
      <nuxt-link class='nav-link' to="/posts">Блог</nuxt-link>
      <nuxt-link class='nav-link' to="/about">Об авторе</nuxt-link>
      <nuxt-link class='nav-link' to="/contacts">Контакты</nuxt-link>
      <select style="width: 50px" @change="changeLang">
        <option selected value="ru">Ru</option>
        <option value="en">En</option>
      </select>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    name: "headerElement",
    methods: {
      changeLang(event) {
        this.$store.dispatch('changeLang', {lang: event.target.value});
      }
    }
  }
</script>

<style scoped>

</style>
