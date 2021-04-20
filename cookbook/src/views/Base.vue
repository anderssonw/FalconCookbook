<template>
  <div class="">
    <Toolbar />
    <div class="blue">
      <Menu />
    </div>
      <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import Menu from '../components/Menu.vue'

export default {
  name: 'Base',
  components: {
    Toolbar,
    Menu,
  },
}
</script>
<style></style>
