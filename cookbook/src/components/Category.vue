<template>
  <v-container class="red">
    <v-row @click="clickCategory">
      <v-col cols="10" class="category-title">
        {{ category.data.title }}
      </v-col>
      <v-col class="icon" cols="2">
        <v-btn icon outlined color="yellow">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expand-transition>
          <div v-show="show" class="red">
            <v-divider></v-divider>
            <div v-for="guide in guides" :key="guide.id">
              <v-row>
                <v-col class="text-title">
                  {{ guide.data.title }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-description">
                  {{ guide.data.description }}
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col :cols="calculateCols()" v-for="gfy in guide.data.gfySrc" :key="gfy">
                  <iframe
                    style="text-align: center"
                    :src="'https://gfycat.com/ifr/' + gfy"
                    scrolling="no"
                    class="pa-4"
                    allowfullscreen
                    :height="calculateHeight()"
                    width="100%"
                  />
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col :cols="calculateCols()" v-for="img in guide.data.imgurSrc" :key="img">
                  <v-img :src="img" />
                </v-col>
              </v-row>
            </div>
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>
<script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
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
      if (this.guides.length == 0 && this.show == false) {
        CategoryAPI.getGuidesInCategory(this.category.id)
          .then((res) => {
            this.guides = res.data
          })
          .finally((this.show = true))
      } else {
        this.show = !this.show
      }
    },
    calculateHeight() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return this.$vuetify.breakpoint.width / 4
      } else {
        return this.$vuetify.breakpoint.width / 2
      }
    },
    calculateCols() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 6
      } else {
        return 12
      }
    },
  },
}
</script>

<style>
.icon {
  text-align: center;
  vertical-align: center;
}

.text-title {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
  font-size: 2em;
  text-align: center;
  text-shadow: 0px 4px 1px black;
}

.category-title {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
  font-size: 2em;
  text-shadow: 0px 4px 1px black;
}

.text-description {
  color: white;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
  text-shadow: 0px 4px 1px black;
}

iframe {
  display: block;
  margin: 0 auto;
  border-style: none;
}
</style>
