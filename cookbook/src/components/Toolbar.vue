<template>
  <div class="red pa-0 my-8">
    <v-container fluid class="pa-0 ">
      <v-row class="ma-0 pl-12">
        <v-col v-on:click="sendHome" class="home pa-0">
          <v-row class="ma-0 pa-0"><v-col class="cptfalcon text pa-0 mb-n3">THE CAPTAIN FALCON</v-col></v-row>
          <v-row class="ma-0 pa-0"><v-col class="cookbook text pa-0 my-n3">COOKBOOK</v-col></v-row>
        </v-col>
        <v-col class="logo pa-0" yellow>
          GINGA GONGA
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',

  data: () => ({}),

  methods: {
    sendHome() {
      this.$router.push('/').catch((err) => {})
    },
  },
}
</script>

<style>
.text {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
}

.text:hover {
  cursor: pointer;
}

.cptfalcon {
  font-size: 2em;
}

.cookbook {
  font-size: 3em;
}

.logo {
  color: #d3a40f;
  font-size: 3em;
}
</style>
