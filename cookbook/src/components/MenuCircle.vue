<template>
    <router-link 
    :to="link" 
    class="a text-uppercase" 
    :class="{active:active}">
        {{text}}
    </router-link>
</template>

<script>
export default {
  name: 'MenuCircle',
  props: {
    text: String,
    link: String,
   },
  data() {
      return { 
        active: false
      }
  },
  methods: {
    set_active: function() {
      //catches sub routes to keep menus highlighted
      this.active = this.$route.fullPath.split('/').slice(1)
      .some(crumb => crumb === this.link.slice(1) )
    }
  },
  created: function() {
    //runs on component creation since the route watcher isn't working yet
      this.set_active()
  },
  watch: {
    //covers route changes after initial load
    $route (to, from) {
      this.set_active()
    }
  }
};
</script>

<style scoped>
.a {
  display: flex;
  justify-content: center;
  align-items:center;
  text-decoration: none;
  color: #dddddd;
  background: #c6c6c6;
  border-radius: 80px;
  line-height: 28px;
  width: 160px;
  height: 160px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: arial;
  text-decoration: none;
  font-weight: 800;
  font-size: 28px;
  text-align:center;
}

.a:hover {
  color: #fefefe;
  background: #cb5464 !important;
}

.active {
  background: #6e6e6e;
  color: #fefefe;
}

</style>
