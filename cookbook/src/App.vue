<template>
  <v-app class="app">
    <v-main class="gray_bg">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
}
</script>
<style>
  .app {
    overflow:hidden !important;
  }
</style>
