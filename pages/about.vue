<template>
  <b-container class="about">
    <b-row>
      <b-col cols="12">
        <title-element label="1">{{ title[lang] }}</title-element>
        <title-element label="2">{{ name[lang] }}</title-element>
        <p class="about__description">
          {{ description[lang] }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import titleElement from '~/components/elements/titleElement'

  export default {
    name: "about",
    data: function () {
      return {
        title: {
          ru: 'Об авторе',
          en: 'About'
        },
        name: {
          ru: 'Джоан Роулинг',
          en: 'Joanne Rowling'
        },
        description: {
          ru: 'Описание автора блога',
          en: 'Description posts author'
        }
      }
    },
    computed: {
      lang() {
        return this.$store.state.lang
      }
    },
    components: {
      titleElement
    }
  }
</script>

<style scoped>

</style>
