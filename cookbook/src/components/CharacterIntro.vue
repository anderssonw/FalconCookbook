<template>
    <div class="intro d-flex">
        <character :name="name"  :img="img" />
        <span class="intro">
            <h2 class="text-uppercase">VERSUS {{name}}: INTRODUCTION</h2>
            <h3></h3>
            <p>This paragraph will contain a brief summary of the matchup between this character and Falcon. Below this paragraph, in the blank area, there will be some sort of matchup or character stats in a graph or some visual form. The subcategories below (for example, "Fox's Moves and Hitboxes") will open up upon being clicked to reveal the images/text they contain. On the right hand side, there will be plus signs which will indicate that the subcategory can be expanded. These may be made to look clickable buttons instead.</p>
            <h4 class="text-uppercase">+ {{name}}'S MOVES AND HITBOXES</h4>
            <h4 class="text-uppercase">+ RECOMMENDED STAGES AND BANS</h4>
            <h4 class="text-uppercase">+ FREQUENTLY ASKED {{name}} QUESTIONS</h4>
        </span>
    </div>
</template>
<script>
import Character from './Character.vue'

export default {
    name:'CharacterIntro',
    setup() { },
    components: {
        Character
    },
    props: {
        name: String
    },
    data() {
        return {
            img: this.name + '.png',
        }
    }

}
</script>

<style scoped>
    .intro {
        width:50vw;;
        height:auto;
    }
</style>