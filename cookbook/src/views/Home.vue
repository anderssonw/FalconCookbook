<template>
  <div class="discords red pa-2">
    <p>Check out our communities</p>
    <span v-for="discord in discords" :key="discord.title">
      <p class="title">{{ discord.title }}</p>
      <p class="inv-link mt-n3">{{ discord.invLink }}</p>
    </span>
  </div>
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
.discords {
  line-height: 1;
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
  font-size: 1rem;
}

.title {
  font-size: 1.5em;
}


.discords>p {
  font-size: 2rem;
}

</style>
