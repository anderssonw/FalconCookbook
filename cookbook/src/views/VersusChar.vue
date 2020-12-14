<template>
  <v-card width="80%">
    <v-card-title>Versus {{ $route.params.character }}</v-card-title>
    <v-container>
      <v-row>
        <v-col>Some stuff here</v-col>
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

  methods: {},

  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style></style>
