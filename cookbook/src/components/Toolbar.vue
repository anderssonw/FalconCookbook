<template>
  <div class="red pa-0 my-8">
    <v-container class="toolbar pa-0 ">
      <v-row>
        <v-col class="pa-0">
          <v-row><v-col class="cptfalcon text pa-0 mb-n3">THE CAPTAIN FALCON</v-col></v-row>
          <v-row><v-col class="cookbook text pa-0 my-n3">COOKBOOK</v-col></v-row>
        </v-col>
        <v-col class="logo" yellow>
          Some text or something
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',

  data: () => ({}),
}
</script>

<style>
.toolbar {
}

.text {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
}

.cptfalcon {
  font-size: 2em;
}

.cookbook {
  font-size: 3em;
}

.logo {
  color: #d3a40f;
}
</style>
