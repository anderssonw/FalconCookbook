<template>
  <!-- <div class="red py-4 vs-container">
    <ul class="py-2 px-3 vs-row" v-for="n in 3" :key="n">
      <li v-for="char in getCharRow(n)" v-bind:key="char.id" class="char-button py-0 mx-3" align="center">
        <img class="char-img ma-6" v-on:click="onCharacterButtonClick(char)" :src="char.data.iconSrc" />
      </li>
    </ul>
  </div> -->
  <span class="chars">
    <Character v-for="char in characters" :key="char.name" :link="char.url" :img="char.img" />
  </span>

</template>

<script>
// import characters from '../api/characters'
// import CharacterAPI from '../api/characters'
import Character from '@/components/Character.vue'
import characters from '@/assets/characters.json'

export default {
  data: () => ({
    characters,
    loading: true,
  }),
  components: {
    Character,
  },
  methods: {
    onCharacterButtonClick(character) {
      this.$router.push({
        name: 'VersusChar',
        params: { character: character.id },
      })
    },

    getCharRow(index) {
      if (index == 1) {
        return this.characters.slice(0, 9)
      } else if (index == 2) {
        return this.characters.slice(9, 18)
      } else {
        return this.characters.slice(18, 26)
      }
    },
  },

  created() {
    CharacterAPI.getAllCharacters().then((res) => {
      this.characters = res.data

      this.loading = false
    })
  },
}
</script>

<style>
.chars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.char-button {
  box-shadow: inset 1px 1px 7px 1px;
  background: rgba(0, 50, 43, 0.3);
  list-style-type: none;
}

.char-img {
  -webkit-filter: drop-shadow(2px 2px 3px black);
  filter: drop-shadow(2px 2px 3px black);
}

.char-button:hover {
  cursor: pointer;
}

.vs-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.vs-row:last-child {
  justify-content: center;
}

.vs-container:last-child {
  justify-content: left;
}
</style>
