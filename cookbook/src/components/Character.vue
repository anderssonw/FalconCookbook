<template>
  <div :style="style">
      <a  :href="link"></a>
  </div>
</template>
<script>
export default {
  setup() {},
  props: {
    link: String,
    img: String,
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
  display: inherit;
  height: inherit;
  width: inherit;
}

div {
  border-radius: 0px !important;
  height: 200px;
  width: 130px;
  background:  #eeeeee var(--imgurl) no-repeat !important;
  /* margin-right: 10px;
  margin-left: 10px; */
}

a:hover {
  background: #cb5464 var(--imgurl) no-repeat !important;
}

</style>
