<template>
  <v-card width="500px">
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-actions>
      <v-card-text text>
        Show description and Gfycat
      </v-card-text>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-subtitle>
          {{ description }}
        </v-card-subtitle>
        <iframe
          :src="fullGfyEmbedSrc(gfySrc)"
          frameborder="0"
          scrolling="no"
          allowfullscreen
          width="400"
          height="300"
        ></iframe>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "GFYDrop",

  props: {
    title: String,
    description: String,
    gfySrc: String,
  },

  methods: {
    fullGfyEmbedSrc(src) {
      return "https://gfycat.com/ifr/" + src;
    },
  },

  data: () => ({
    show: false,
  }),
};
</script>
