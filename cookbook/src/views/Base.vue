<template>
  <div>
    <Toolbar />
    <div class="content pt-4 pb-12 mb-12 mx-12 blue">
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
<style>
.content {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
