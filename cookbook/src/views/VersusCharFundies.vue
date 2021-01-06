<template>
  <v-card width="80%">
    <v-card-title>Versus {{ $route.params.character }} {{ $route.params.fundamental }}</v-card-title>
    <category />
  </v-card>
</template>

<script>
import Category from '../components/Category.vue'
export default {
  components: {
    Category,
  },
  data: () => ({}),

  methods: {},
}
</script>

<style></style>
