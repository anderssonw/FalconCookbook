<template>
    <character :name="name"  :img="img" />
</template>

<script>
import Character from '@/components/Character'

export default {
  setup() {},
  components: {
      Character
  },
  props: {
      name: String,
      img: String
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
<style lang="scss" scoped>

a {
    pointer-events: auto;
    &:hover {
      background: #cb5464 var(--imgurl) no-repeat !important;
    }
}

</style>
