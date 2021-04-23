<template>
    <div id="intro">
        <Character :img="c.img" />
        <h2>VERSUS {{name}}: INTRODUCTION</h2>
        <h3></h3>
        <p>This paragraph will contain a brief summary of the matchup between this character and Falcon. Below this paragraph, in the blank area, there will be some sort of matchup or character stats in a graph or some visual form. The subcategories below (for example, "Fox's Moves and Hitboxes") will open up upon being clicked to reveal the images/text they contain. On the right hand side, there will be plus signs which will indicate that the subcategory can be expanded. These may be made to look clickable buttons instead.</p>
        <h4>+ FOX'S MOVES AND HITBOXES</h4>
        <h5>+ RECOMMENDED STAGES AND BANS</h5>
        <h6>+ FREQUENTLY ASKED FOX QUESTIONS</h6>
    </div>
</template>
<script>
import Character from './Character.vue'

export default {
    setup() { },
    components: {
        Character
    },
    props: {
        name: String
    },
    data() {
        return {
            c: {
                name:"fox",
                url:"fox.html",
                img:"fox.png"
            }
        }
    }

}
</script>

<style scoped>
</style>