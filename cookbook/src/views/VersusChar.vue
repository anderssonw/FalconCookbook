<template>
  <div class="everything d-flex flex-column align-center">
    <div class="text-uppercase versus red">
      <p class="vs-text">
          versus {{ name }}
      </p>
      <span class="options d-flex">
        <p 
          class="vs-btn ma-3" 
          :class="vsButton.color"
          v-on:click="fundamentalCardClick(vsButton.text)" 
          v-for="vsButton in vsButtons" 
          :key="vsButton.text">
              {{vsButton.text}}
          </p>
      </span>
    </div>
    <character-intro :name="name"/>
  </div>
</template>

<script>
import CharacterIntro from '@/components/CharacterIntro.vue'

export default {
  data() {
    return {
      name: this.$route.params.character,
      vsButtons: [
        {
          text: 'neutral',
          color: 'green',
          icon: 'mdi-brain',
        },
        {
          text: 'punish',
          color: 'purple',
          icon: 'mdi-sword',
        },
        {
          text: 'defense',
          color: 'blue',
          icon: 'mdi-shield',
        },
        {
          text: 'edgeguard',
          color: 'orange',
          icon: 'mdi-block',
        },
      ],
    }
  },
  components: {
    CharacterIntro
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

<style lang="scss" scope>

.vs-text {
  @include itboldcenter;
  color: #d3a40f;
  font-size: 3em;
  text-shadow: 0px 4px 1px black;
}

.vs-btn{
  @include itboldcenter;
  color: white;
  font-size: 1.5em;
  text-shadow: 0px 4px 1px black;
  border-radius: 25px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
}

</style>
