<template>
  <v-card width="80%">
    <v-card-title>Versus {{ $route.params.character }} {{ $route.params.fundamental }}</v-card-title>
    <Category v-for="category in categories" :key="category.id" :category="category" />
  </v-card>
</template>

<script>
import CategoryAPI from '../api/categories'
import Category from '../components/Category.vue'
export default {
  components: {
    Category,
  },
  data: () => ({
    categories: [{}],
  }),

  methods: {},

  created() {
    CategoryAPI.getCategoriesOnCharAndFundamental(this.$route.params.character, this.$route.params.fundamental).then(
      (res) => {
        this.categories = res.data
      }
    )
  },
}
</script>

<style></style>
