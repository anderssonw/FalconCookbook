<template>
  <div class="">
    <Toolbar />
    <div class="route-holder d-md-flex">
      <div class="blue pr-4 flex-grow-0">
        <Menu />
      </div>
      <router-view class="flex-grow-1" />
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
