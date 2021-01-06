<template>
	<div>
		<Toolbar />
		<router-view />
	</div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
//mport GFYDrop from "@/components/GFYDrop.vue";

export default {
	name: 'Home',
	components: {
		//GFYDrop,
		Toolbar,
	},
}
</script>
