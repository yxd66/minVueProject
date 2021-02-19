<template>
  <div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import Star from './components/Star.vue'
	export default {
		name: 'App',
		components: {
			Star
		}
	}
</script>

<style>
	@import url("./assets/base.css");
	.app {
		width: 100%;
		height: 100%;
	}
</style>
