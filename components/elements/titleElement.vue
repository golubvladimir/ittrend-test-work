<template>
    <h1 v-if="label === '1'">
      <slot></slot>
    </h1>
    <h2 v-else-if="label === '2'">
      <slot></slot>
    </h2>
    <h3 v-else-if="label === '3'">
      <slot></slot>
    </h3>
</template>

<script>
    export default {
      name: "titleElement",
      props: {
        label: String
      }
    }
</script>

<style scoped>

</style>
