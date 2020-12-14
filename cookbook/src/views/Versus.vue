<template>
  <v-card width="80%">
    <v-card-title>View matchup specific techniques</v-card-title>
    <v-container>
      <v-row>
        <v-col v-for="char in characters" v-bind:key="char.imgSrc">
          <v-btn v-on:click="onCharacterButtonClick(char)">
            {{ char.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    characters: [
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
      {
        name: "Falco",
        imgSrc:
          "https://static.wikia.nocookie.net/ssb/images/e/e1/Falco_Head_01_%28SSBM%29.png/revision/latest/scale-to-width-down/24?cb=20160118221914",
      },
    ],
  }),

  methods: {
    onCharacterButtonClick(character) {
      this.$router.push({
        name: "VersusChar",
        params: { character: character.name },
      });
    },
  },
};
</script>

<style></style>
