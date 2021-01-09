<template>
  <v-card tile class="red">
    <v-card-title>Versus {{ $route.params.character }}</v-card-title>
    <v-container>
      <v-row>
        <v-col class="neutral">
          <v-card color="green" hover v-on:click="fundamentalCardClick(`neutral`)">
            <v-card-title> Neutral </v-card-title>
            <v-icon> mdi-brain </v-icon>
          </v-card>
        </v-col>
        <v-col style="display: inline" class="punish">
          <v-card color="red" hover v-on:click="fundamentalCardClick(`punish`)">
            <v-card-title> Punish </v-card-title>
            <v-icon> mdi-sword </v-icon>
          </v-card>
        </v-col>
        <v-col class="defense">
          <v-card color="blue" hover v-on:click="fundamentalCardClick(`defense`)">
            <v-card-title> Defense </v-card-title>
            <v-icon> mdi-shield </v-icon>
          </v-card>
        </v-col>
        <v-col class="edgeguards">
          <v-card color="orange" :hover="true" v-on:click="fundamentalCardClick(`edgeguards`)">
            <v-card-title> Edgeguards </v-card-title>
            <v-icon> mdi-content-save </v-icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),

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

<style scoped></style>
