<template>
  <!-- <div class="logo"></div> -->
  <v-img
    class="logo"
    src="../assets/logo.png"
    max-width="100%"
  />

</template>
<script>
export default {
  name: 'Logo',
  setup() { },
  data: function() {
    return {
      path: String,
    }
  }
}
</script>
<style scoped>
.logo {
  margin: 0px auto 20px auto;
}
</style>
