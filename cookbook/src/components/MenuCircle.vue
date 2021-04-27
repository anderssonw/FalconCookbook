<template>
    <router-link 
    :to="link" 
    class="menu-circle a text-uppercase rounded-circle" 
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

<style lang="scss" scoped>
.a {
  overflow:hidden;
  word-wrap:break-word;

  display: flex;
  justify-content: center;
  align-items:center;
  text-align:center;

  color: #dddddd;
  background: #c6c6c6;

  margin-right: .5rem;
  margin-left: .5rem;

  text-decoration: none;
  font-family: arial;
  font-weight: 800;

  &:hover {
    color: #fefefe;
    background: #cb5464 !important;
  }
}

.active {
  background: #6e6e6e;
  color: #fefefe;
}

</style>
