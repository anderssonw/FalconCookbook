<template>
  <v-card tile class="red" width="80%">
    <v-card-actions>
      <v-card-title>{{ category.data.title }}</v-card-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="clickCategory">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show" class="red">
        <v-divider></v-divider>
        <!-- beautiful key hack cuz idk what to put-->
        <div v-for="guide in guides" :key="guide.id">
          <v-card-text>
            {{ guide.data.title }}
          </v-card-text>
          <v-card-subtitle>
            {{ guide.data.description }}
          </v-card-subtitle>
          <iframe
            class="ma-6"
            v-for="gfy in guide.data.gfySrc"
            :key="gfy"
            :src="'https://gfycat.com/ifr/' + gfy"
            frameborder="1"
            scrolling="no"
            allowfullscreen
          />
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import CategoryAPI from '../api/categories'
export default {
  props: {
    category: {
      id: String,
      data: {
        title: String,
      },
    },
  },
  data() {
    return {
      show: false,
      guides: [],
    }
  },
  methods: {
    clickCategory() {
      if (this.guides.length == 0) {
        CategoryAPI.getGuidesInCategory(this.category.id)
          .then((res) => {
            this.guides = res.data
            console.log(this.guides)
          })
          .finally((this.show = true))
      } else {
        this.show = !this.show
      }
    },
  },
}
</script>

<style></style>
