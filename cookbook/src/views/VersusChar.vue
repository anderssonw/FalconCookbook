<template>
  <div class="text-uppercase versus red">
    <p class="vs-text">
        versus {{  $route.params.character }}
    </p>
    <span class="options d-flex">
      <p 
        class="vs-btn ma-3" 
        :class="vsButton.color"
        v-on:click="fundamentalCardClick(vsButton.text)" 
        v-for="vsButton in vsButtons" 
        :key="vsButton.text">
            {{vsButton.text}}
        </p>
    </span>

  </div>
</template>

<script>
export default {
  data: () => ({
    vsButtons: [
      {
        text: 'neutral',
        color: 'green',
        icon: 'mdi-brain',
      },
      {
        text: 'punish',
        color: 'purple',
        icon: 'mdi-sword',
      },
      {
        text: 'defense',
        color: 'blue',
        icon: 'mdi-shield',
      },
      {
        text: 'edgeguard',
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

.vs-btn{
  color: white;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
  text-align: center;
  text-shadow: 0px 4px 1px black;
  border-radius: 25px;
  padding: 10px;
}

.vs-btn:hover {
  cursor: pointer;
}
</style>
