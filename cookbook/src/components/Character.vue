<template>
      <!-- <a :style="style" :href="link"></a> -->
    <router-link :style="style" :to="{name: 'VersusChar', params: {character: name}}" class="a" />
</template>

<script>
export default {
  setup() {},
  props: {
    link: String,
    img: String,
    name: String,
  },
  data() {
    return {
      imgPath: require(`@/assets/characters/${this.img}`)
    }
  },
  computed: {
    style() {
      return {
          '--imgurl': `url(${this.imgPath})`,
      }
    },
  },
};
</script>
<style scoped>

a {
  border-radius: 0px !important;
  height: 200px;
  width: 130px;
  background:  #eeeeee var(--imgurl) no-repeat !important;
}

a:hover {
  background: #cb5464 var(--imgurl) no-repeat !important;
}

</style>
