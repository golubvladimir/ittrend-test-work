<template>
  <b-container class="contacts">
    <b-row>
      <b-col cols="12">
        <title-element label="1">{{ title[lang] }}</title-element>
        <p class="contacts__address">
          {{ address[lang] }}
        </p>
        <p class="contacts__email">
          {{ email }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import titleElement from '~/components/elements/titleElement'

  export default {
    name: "contacts",
    data: function () {
      return {
        title: {
          ru: 'Контакты',
          en: 'Contacts'
        },
        address: {
          ru: 'г. Калининград, ул. Гоголя, д. 1, кв. 1',
          en: 'Kaliningrad city, Gogola str., 1, apt. 1'
        },
        email: 'nuxtblog@mail.com'
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
