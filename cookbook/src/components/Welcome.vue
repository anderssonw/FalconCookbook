<template>
  <div id="welcome">
    <div class="welcome-holder">
        <h2 class="banner">SHOW ME YOUR MOVES!</h2>
        <p>
        This paragraph will describe what you can find on this website and how to
        use it. Below, I will add the invite link for the R&D Discord. I will be
        adding a "copy text" button for the invite link, and another button next
        to it which will take you directly to the invite link. Temporarily, the
        invite is clickable as a hyperlink.
        </p>
    </div>
    <div class="discord-holder">
        <h4 class="discord-img"></h4>
        <h5 @click="copy" class="discord"><a href="https://discord.gg/azthzrj">https://discord.gg/azthzrj</a></h5>
    </div>
    <v-snackbar
      v-model="snacker.seen"
      :timeout="snacker.timeout"
      color="success"
    >
      {{snacker.text}}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data: function() {
    return {
      snacker: {
        seen: false,
        timeout: 1000,
        text: "link copied!"
      },
    }
  },
  methods: {
    copy: function(e) {
      this.snacker.seen = true
      navigator.clipboard.writeText(e.target.innerText)
    }
  }
}
</script>

<style scoped>

.hidden {
  opacity: 0;
  /* display: none; */
}
#welcome {
    width:fit-content;
    --bg:#eeeeee;
    font-family: arial;
    font-weight: normal;
}

.discord-holder {
    display: flex;
    align-items:center;
    justify-content: flex-start;
}

.welcome-holder {
  background: var(--bg);
  border: 1px solid #c6c6c6;
  width: 500px;
  display:flex;
  flex-direction:column;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
}

.banner {
  color: #585889;
  font-weight: 800;
  font-size: 1rem;
}


#welcome p {
  font-size: .75rem;
  line-height: 20px;
  color: #444444;
}

#welcome .discord-img {
  background: url("../assets/discord.png") no-repeat;
  width: 47px;
  height: 54px;
  margin-right: 10px;
}

#welcome .discord {
  font-family: courier;
  font-weight: normal;
  background: var(--bg);
  flex-grow: 1;
  border: 1px solid #c6c6c6;
  font-size: 1.1rem;
  padding: .6rem;
  cursor:pointer;
}

a {
  color: #444444 !important;
}

a:hover {
  color: #cb5464 !important;
}
</style>
