<template>
  <ul class="py-3 px-0 menu">
    <router-link tag="li" class="menu-ref" v-for="route in menuRoutes" v-bind:key="route.text" :to="route.link">
      {{ route.text }}
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuRoutes: [
        {
          link: '/vs',
          text: 'MATCHUPS',
        },
        {
          link: '/general',
          text: 'GENERAL GUIDES',
        },
        {
          link: '/basics',
          text: 'BASICS',
        },
        {
          link: '/FAQ',
          text: 'FAQ',
        },
      ],
    }
  },
}
</script>

<style>
.menu-ref {
  list-style-type: none;
  color: #d69225;
  cursor: pointer;
  font-weight: bolder;
  font-style: italic;
  font-size: 2em;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.router-link-active {
  text-decoration-color: #d3a40f;
  text-decoration: underline;
  color: #d3a40f;
}
</style>
