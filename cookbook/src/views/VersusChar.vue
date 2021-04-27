<template>
  <div class="whole d-flex flex-column align-center">
    <div class="char-base">
      <character class="character" :name="name" :img="name + '.png'"/>
      <div class="intro-menu">
        {{text}}
        <div class="menu d-flex flex-wrap justify-center">
          <MenuCircle v-for="menu in menus" :key="menu.text" :text="menu.text" :link="route + menu.text" />
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Character from '../components/Character.vue'
import MenuCircle from '../components/MenuCircle.vue'
export default {
  data() {
    return {
      name: this.$route.params.character,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet minus amet. Praesentium consequuntur, nisi earum corrupti explicabo natus voluptatibus totam hic veritatis assumenda neque ipsum tenetur. Harum dolorum commodi quam, ad dolore unde tempora ullam totam natus doloribus, sapiente corrupti consequuntur minus ratione. Ducimus non ad laudantium earum obcaecati?",
      menus: [
        {
          text: 'intro',
        },
        {
          text: 'offense',
        },
        {
          text: 'neutral',
        },
        {
          text: 'defense',
        },
        {
          text: 'misc',
        },
      ],
    }
  },
  computed: {
    route: function() {
      return `/vs/${this.name}/`
    },
  },
  components: {
    Character,
    MenuCircle
  },
  methods: {
    fundamentalCardClick(e) {
      this.$router.push({
        name: 'VersusCharFundamental',
        params: { fundamental: e },
      })
    },
  },
}
</script>

<style lang="scss">
.character {
  margin-bottom: 10px;
}
.intro-menu {
  width:100%;
  @include normal-text;
}

.char-base {
  @include border;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  width:85%;
  background: $bg-text;
  padding:20px;
}

.char-base .menu-circle {
  @include menu-dimensions(60px, 11px);
  margin: 10px;
}

@include mq-min(840px) {
  .character {
    margin-right: 10px;
  }

  .intro-menu {
    width:70%;
  }

  .char-base {
    flex-direction: row;
    align-items:flex-start;
    text-align:unset;
  }
  .char-base .menu-circle {
    @include menu-dimensions(75px, 13px);
  }
  
}

@include mq-min(1300px) {
  .char-base {
    width: 60%;
  }
  .char-base .menu-circle {
    @include menu-dimensions(90px, 14px);
  }

}
</style>
