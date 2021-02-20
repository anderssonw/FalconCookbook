<template>
  <v-container v-if="dataIsFetched" class="red">
    <v-row>
      <v-col class="vs-text">
        VERUS {{ ($route.params.character + ' ' + $route.params.fundamental).toUpperCase() }}</v-col
      >
    </v-row>
    <v-row v-for="category in categories" :key="category.id">
      <v-col>
        <Category :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryAPI from '../api/categories'
import Category from '../components/Category.vue'
export default {
  components: {
    Category,
  },
  data: () => ({
    dataIsFetched: false,
    categories: [{}],
  }),

  methods: {},

  created() {
    CategoryAPI.getCategoriesOnCharAndFundamental(this.$route.params.character, this.$route.params.fundamental).then(
      (res) => {
        this.categories = res.data
        this.dataIsFetched = true
      }
    )
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
</style>
