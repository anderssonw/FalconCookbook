<template>
  <div>
    <Toolbar />
    <v-container fluid class="container" blue>
      <Menu />
      <router-view />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import Menu from '../components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Toolbar,
    Menu,
  },
}
</script>
<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 5em;
}
</style>
