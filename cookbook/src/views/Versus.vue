<template>
  <v-card width="80%">
    <v-card-title>View matchup specific techniques</v-card-title>
    <v-container loading>
      <v-skeleton-loader type="heading, list-item-three-line, sentences" v-if="loading" />
      <v-row justify="space-around" v-else>
        <v-col v-for="char in characters" v-bind:key="char.id">
          <v-btn v-on:click="onCharacterButtonClick(char)">
            <!--<v-img height=20px :src="char.data.stockImgSrc"></v-img>-->
            {{ char.data.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import CharacterAPI from '../api/characters'
export default {
  data: () => ({
    characters: [],
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
      this.characters = res.data
      this.loading = false
    })
  },
}
</script>

<style></style>
