<template>
  <v-app class="">
    <v-main class="main_orange">
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

  .ugh {
    width: 100vw;
    height: 100vh;
  }
</style>
