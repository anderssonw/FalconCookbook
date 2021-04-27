<template>
  <span class="chars">
    <character-hover v-for="char in characters" :key="char.name" :name="char.name" :link="char.url" :img="char.img" />
  </span>

</template>

<script>
// import characters from '../api/characters'
// import CharacterAPI from '../api/characters'
import CharacterHover from '@/components/CharacterHover.vue'
import characters from '@/assets/characters.json'

export default {
  data: () => ({
    characters,
    loading: true,
  }),
  components: {
    CharacterHover
  },
  // methods: {
  //   onCharacterButtonClick(character) {
  //     this.$router.push({
  //       name: 'VersusChar',
  //       params: { character: character.id },
  //     })
  //   },

  //   getCharRow(index) {
  //     if (index == 1) {
  //       return this.characters.slice(0, 9)
  //     } else if (index == 2) {
  //       return this.characters.slice(9, 18)
  //     } else {
  //       return this.characters.slice(18, 26)
  //     }
  //   },
  // },

  // created() {
  //   CharacterAPI.getAllCharacters().then((res) => {
  //     this.characters = res.data

  //     this.loading = false
  //   })
  // },
}
</script>

<style lang="scss" scoped>
.chars {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.char-button {
  box-shadow: inset 1px 1px 7px 1px;
  background: rgba(0, 50, 43, 0.3);
  list-style-type: none;
  &:hover {
    cursor: pointer;
  }
}

.char-img {
  -webkit-filter: drop-shadow(2px 2px 3px black);
  filter: drop-shadow(2px 2px 3px black);
}

@include mq-min(574px) {
  .chars {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}
@include mq-min(774px) {
  .chars {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@include mq-min(900px) {
  .chars {
    grid-template-columns: repeat(5, 1fr) !important;
  }
}
</style>
