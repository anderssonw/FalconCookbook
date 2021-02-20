<template>
  <v-card tile class="red">
    <v-container>
      <v-row>
        <v-col class="vs-text"> VERSUS {{ $route.params.character.toUpperCase() }} </v-col>
      </v-row>
      <v-row class="pa-4" justify="space-around">
        <v-col
          v-for="vsButton in vsButtons"
          :class="vsButton.color"
          class="vs-btn-text ma-3"
          :key="vsButton.text"
          hover
          v-on:click="fundamentalCardClick(vsButton.text.toLowerCase())"
        >
          <v-row>
            <v-col>
              {{ vsButton.text }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    vsButtons: [
      {
        text: 'NEUTRAL',
        color: 'green',
        icon: 'mdi-brain',
      },
      {
        text: 'PUNISH',
        color: 'purple',
        icon: 'mdi-sword',
      },
      {
        text: 'DEFENCE',
        color: 'blue',
        icon: 'mdi-shield',
      },
      {
        text: 'EDGEGUARD',
        color: 'orange',
        icon: 'mdi-block',
      },
    ],
  }),

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

<style>
.vs-text {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
  font-size: 3em;
  text-align: center;
  text-shadow: 0px 4px 1px black;
}

.vs-btn-text {
  color: white;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
  text-align: center;
  text-shadow: 0px 4px 1px black;
  border-radius: 25px;
}

.vs-btn-text:hover {
  cursor: pointer;
}
</style>
