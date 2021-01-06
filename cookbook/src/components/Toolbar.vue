<template>
	<v-container class="pa-0 ma-0">
		<v-row>
			<v-toolbar
				prominent
				src="https://venturebeat.com/wp-content/uploads/2016/03/smashmelee.jpg?fit=1920%2C1080&strip=all"
			>
				<template v-slot:img="{ props }">
					<v-img class="b-img" v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
				</template>
				<v-toolbar-title class="toolbarTitle"> The Falcon Discord Cookbook </v-toolbar-title>
			</v-toolbar>
		</v-row>
		<v-row class="menuBar" align="center" justify="space-around">
			<v-col v-for="route in menuRoutes" v-bind:key="route.text">
				<router-link :to="route.link">{{ route.text }}</router-link>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Toolbar',

	data: () => ({
		menuRoutes: [
			{
				link: '/vs',
				text: 'Versus',
			},
			{
				link: '/general',
				text: 'General Guides',
			},
		],
	}),
}
</script>

<style>
.toolbarTitle {
	filter: drop-shadow(0px 0px 2px #000000);
}

a {
	text-decoration: none;
}

.menuBar {
	text-align: center;
}
</style>
