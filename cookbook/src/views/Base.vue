<template>
  <div class="whole d-flex flex-column align-center">
      <Logo />
      <span class="menu d-flex flex-wrap justify-center">
        <MenuCircle v-for="menu in menus" :key="menu.text" :text="menu.text" :link="menu.link"/>
      </span>
      <router-view class="flex-grow-1" />
    </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import MenuCircle from '@/components/MenuCircle.vue'

export default {
  name: 'Base',
  components: {
    Logo,
    MenuCircle,
  },
  data() {
    return {
      menus: [
      {
        text: 'main page',
        link: '/'
      },
      {
        // text: 'general guides',
        text: 'testing',
        link: '/playground'
      },
      {
        text: 'matchup guides',
        link: '/vs'
      },
    ],

    }
  }
}
</script>
<style lang="scss">
  .whole {
    padding-top: 20px;
    margin-bottom: 60px;
  }
  .menu {
    margin-bottom: 20px;
  }

  .whole .menu-circle {
    @include menu-dimensions(100px, 18px)
  }

  @include mq-min(600px) {
    .whole .menu-circle {
      @include menu-dimensions(160px, 25px)
    }
  }
</style>
