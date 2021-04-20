<template>
  <header class="cookbook text-uppercase red my-8 pa-1 d-flex justify-space-between align-center">
    <span v-on:click="sendHome" class="cook-holder d-flex mx-2 flex-column flex-grow-1">
      <span class="cptfalcon text mb-n3">the captain falcon</span>
      <span class="text mt-n3">cookbook</span>
    </span>
      <p class="text flex-grow-1 d-none d-md-flex d-lg-flex d-xl-none logo">ginga gonga</p>
  </header>
</template>

<script>
export default {
  name: 'Toolbar',

  data: () => ({}),

  methods: {
    sendHome() {
      this.$router.push('/').catch((err) => {})
    },
  },
}
</script>

<style>
.header {
  width: 1vw;
  height: 100px;
}
.text {
  color: #d3a40f;
  font-weight: bold;
  font-style: italic;
}

.cook-holder:hover {
  cursor: pointer;
}

.logo {
  cursor: default;
}

.cptfalcon {
  font-size: 2rem;
}

.cookbook {
  font-size: 3rem;
}
</style>
