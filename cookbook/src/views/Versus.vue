<template>
  <v-card width="80%">
    <v-card-title>View matchup specific techniques</v-card-title>
    <v-container>
      <v-row>
        <v-col v-for="char in characters" v-bind:key="char.id">
          <v-btn v-on:click="onCharacterButtonClick(char)">
            {{ char.data.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
const axios = require("axios");
export default {
  data: () => ({
    characters: [],
  }),

  methods: {
    onCharacterButtonClick(character) {
      this.$router.push({
        name: "VersusChar",
        params: { character: character.data.name },
      });
    },
  },

  created() {
    axios({
      method: "GET",
      url:
        "http://localhost:5001/thecookbook-5c258/us-central1/app/api/characters",
    }).then((res) => {
      this.characters = res.data;
      console.log(this.characters);
    });
  },
};
</script>

<style></style>
