<template>
  <!-- <v-container class="">
    <v-row>
      <v-col class="red text" cols="7">
        Welcome to the Captain Falcon Cookbook!
      </v-col>
      <v-col class="red text" align="center" offset="1" cols="4">
        Join our Discords!
        <v-row v-for="discord in discords" :key="discord.title">
          <v-row>
            <v-col> {{ discord.title }} </v-col>
          </v-row>
          <v-row>
            <v-col> {{ discord.invLink }} </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container> -->
  <p>blank</p>
</template>

<script>
export default {
  data: () => ({
    discords: [
      {
        title: 'Captain Falcon R&D',
        invLink: 'https://discord.gg/AZtHzRj',
      },
      {
        title: 'The Cookbook (Discord Version)',
        invLink: 'https://discord.gg/KUJ6XZU',
      },
    ],
  }),

  methods: {},

  created() {},
}
</script>

<style scoped>
.text {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
  text-shadow: 0px 4px 1px black;
}
</style>
