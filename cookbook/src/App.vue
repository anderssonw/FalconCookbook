<template>
  <div id="app">
    <h1>Get ready for what the Chef is cooking</h1>
    <img alt="KIKKOOOOOOOOOOO" :src="kikkoSrc">
    <br/>
    <h2>And remember boys:</h2>
    <button @click="scrollDown">Click to remember</button>
    <br/>
    <img class="notext" alt="NO TEXT FOR FUCKS SAKE" :src="noTextSrc">
  </div>
</template>

<script>
const { storage } = require("../firebaseConfig"); 
export default {
  name: 'App',

  data() {
    return {
      kikkoSrc: "",
      noTextSrc: "",
    }
  },

  methods: {
    scrollDown() {
      window.scrollTo(0,document.body.scrollHeight);
    }
  },
  mounted() {
    var storageRef = storage.ref();
    storageRef
      .child("meme/kikko.png")
      .getDownloadURL()
      .then((url) => {
        this.kikkoSrc = url;
      })
      .catch((error) => {
        console.log(error);
      });

    storageRef
    .child("meme/notextpls.gif")
    .getDownloadURL()
    .then((url) => {
      this.noTextSrc = url;
    })
    .catch((error) => {
      console.log(error);
    });
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
h1, h2 {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
body {
  background-color:#2c3e50
}
.notext {
  margin-top: 3000px;
  margin-bottom: 400px
}
</style>
