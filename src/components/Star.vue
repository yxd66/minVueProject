<template>
  <div id="star">
			<public>
				<template v-slot:header>
					<span>第一周</span>
				</template>
				<template v-slot:content>
					<img src="@/assets/images/1-2.png" alt="" class="content">
				</template>
				<template v-slot:button>
					<a href="javascript:void(0)" @click="btn">
						<img src="@/assets/images/index.png" alt="" class="button">
					</a>
				</template>
			</public>
	</div>
</template>

<script>
	import Public from './Public.vue'
	export default {
		name: 'Star',
		components: {
			Public
		},
		methods: {
			btn() {
				this.$router.push('/item')
			}
		}
	}
</script>

<style scoped>
	
	#star  span{
		position:absolute;
		top:8rem;
		left: 1.3rem;
		font-size:0.8rem;
		color: rgb(160, 75, 6);
	}
	#star .content {
		width: 19.26rem;
		height: 17rem;
		position: absolute;
		top: 6.5rem;
		left: 50%;
		margin-left: -9.6rem;
	}
	#star a .button {
		width: 6.37rem;
		height: 3.08rem;
		position: absolute;
		left: 50%;
		margin-left: -3rem;
		top: 24.5rem;
	}
</style>
