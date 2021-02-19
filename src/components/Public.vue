<template>
  <div id="item">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<slot name="content"></slot>
		<slot name="button"></slot>
	</div>
</template>

<script>
export default {
  name: 'Public'
}
</script>

<style scoped>
	#item .header {
		height: 10.6rem;
		width: 4.6rem;
		background-image: url('../assets/images/index1.png');
		background-size: 100% 100%;
		position: absolute;
		right: 2rem;
		top: -1.5rem;
	}
</style>
