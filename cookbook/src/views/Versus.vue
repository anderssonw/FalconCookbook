<template>
  <v-card tile class="red">
    <v-container fluid>
      <div>
        <v-row class="my-4" justify="space-around">
          <v-col
            class=" char-button"
            cols="1"
            v-for="char in charrow1"
            v-bind:key="char.id"
            v-on:click="onCharacterButtonClick(char)"
          >
            <v-img contain height="50%" :src="char.data.iconSrc"></v-img>
          </v-col>
        </v-row>
        <v-row class="my-4" justify="space-around">
          <v-col
            class=" char-button"
            cols="1"
            v-for="char in charrow2"
            v-bind:key="char.id"
            v-on:click="onCharacterButtonClick(char)"
          >
            <v-img contain height="50%" :src="char.data.iconSrc"></v-img>
          </v-col>
        </v-row>
        <v-row class="my-4" justify="space-around">
          <v-col
            class=" char-button"
            cols="1"
            v-for="char in charrow3"
            v-bind:key="char.id"
            v-on:click="onCharacterButtonClick(char)"
          >
            <v-img contain :src="char.data.iconSrc"></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import CharacterAPI from '../api/characters'
export default {
  data: () => ({
    charrow1: [],
    charrow2: [],
    charrow3: [],
    loading: true,
  }),

  methods: {
    onCharacterButtonClick(character) {
      this.$router.push({
        name: 'VersusChar',
        params: { character: character.id },
      })
    },
  },

  created() {
    CharacterAPI.getAllCharacters().then((res) => {
      let data = res.data

      this.charrow1 = data.slice(0, 9)
      this.charrow2 = data.slice(9, 18)
      this.charrow3 = data.slice(18, 26)

      this.loading = false
    })
  },
}
</script>

<style>
.char-button {
  box-shadow: inset 1px 1px 7px 1px;
  background: rgba(0, 50, 43, 0.3);
}
</style>
