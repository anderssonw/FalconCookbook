<template>
  <div class="">
    <Toolbar />
    <div class="blue">
      <Menu />
      <router-view />
    </div>
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
