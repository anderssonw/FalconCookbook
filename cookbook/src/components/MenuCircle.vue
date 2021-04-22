<template>
    <!-- <a class="text-uppercase" @click="active = !active" @click.prevent v-bind:class="{active:active}" href="">{{ text }}</a> -->
    <router-link :to="link" class="a text-uppercase" @click="active = !active" @click.prevent v-bind:class="{active:active}" href="">
        {{text}}
    </router-link>
</template>

<script>
export default {
  name: 'MenuCircle',
  setup(props) {},
  props: {
    text: String,
    link: String,
  },
  data() {
      return {
          active: false,
      }
  },
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
