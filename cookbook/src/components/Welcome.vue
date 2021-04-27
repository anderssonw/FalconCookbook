<template>
  <div id="welcome" class="d-flex flex-column">
    <div class="welcome-holder d-flex flex-column align-center ">
        <h2 class="banner">SHOW ME YOUR MOVES!</h2>
        <p>
        This paragraph will describe what you can find on this website and how to
        use it. Below, I will add the invite link for the R&D Discord. I will be
        adding a "copy text" button for the invite link, and another button next
        to it which will take you directly to the invite link. Temporarily, the
        invite is clickable as a hyperlink.
        </p>
    </div>
    <div class="discord-holder d-flex align-center justify-flex-start">
      <a target="_blank" :href="discord_url">
        <v-img
        src="../assets/discord.png"
        class="discord-img flex-grow-0 mr-5" 
        />
      </a>
        <v-btn 
        @click="copy"
        class="discord"
        elevation="1"
        color="discord"
        >
          copy link
        </v-btn>
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
      discord_url:"https://discord.gg/azthzrj",
    }
  },
  methods: {
    copy: function(e) {
      this.snacker.seen = true
      navigator.clipboard.writeText(this.discord_url)
    }
  }
}
</script>

<style lang="scss" scoped>

#welcome {
    @include normal-text;
    width: 70%;
    margin:auto;
}


.welcome-holder {
  @include border;
  background: $bg-text;
  padding: 10px;
  margin-bottom: 5px;
}

.banner {
  color: #585889;
  font-weight: 800;
  font-size: 1rem;
}


p {
  font-size: .75rem;
  line-height: 20px;
  color: #444444;
}

.discord {
  font-weight: bold;
  flex-grow: 1;
  font-size: 1.1rem;
  padding: .6rem;
  overflow:hidden;
  color: white !important;
}

@include mq-min(1000px) {
  #welcome {
    width:40%;
  }
}
</style>
