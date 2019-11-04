<template>
  <b-navbar variant="faded" type="light">
    <nuxt-link to="/">
      <b-navbar-brand tag="h1" class="mb-0">Blog on Nuxt.js</b-navbar-brand>
    </nuxt-link>
    <b-navbar-nav>
      <nuxt-link
        v-for="link in links"
        :key="link.id"
        class='nav-link'
        :to="link.href"
      >
        {{ link.title[lang] }}
      </nuxt-link>
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
    data: function () {
      return {
        links: [
          {
            id: '1',
            title: {
              ru: 'Блог',
              en: 'Blog'
            },
            href: '/posts'
          },
          {
            id: '2',
            title: {
              ru: 'Об авторе',
              en: 'About'
            },
            href: '/about'
          },
          {
            id: '3',
            title: {
              ru: 'Контакты',
              en: 'Contacts'
            },
            href: '/contacts'
          },
        ]
      }
    },
    computed: {
      lang() {
        return this.$store.state.lang
      }
    },
    methods: {
      changeLang(event) {
        this.$store.dispatch('changeLang', {lang: event.target.value});
      }
    }
  }
</script>

<style scoped>

</style>
