<template>
  <div id="score">
			<div class="see">
				<header>
					{{$store.state.score}}分!
				</header>
				<div>{{evaluate}}</div>
			</div>
			<div class="button"></div>
			<div class="share">
				<header>关注葡萄之家，获取答案</header>
				<img src="../assets/images/4-4.png" alt="">
			</div>
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default {
		name: 'Score',
		computed: {
			evaluate() {
				if(this.$store.state.score > 60) {
					return '你也太聪明啦，葡萄之家欢迎你！'
				} else {
					return '你说，是不是把知识都还给小学老师了？'
				}
			}
		}
	}
</script>

<style scoped>
	#score {
		width: 100%;
		height: 100%;
		background-image: url('../assets/images/4-1.jpg');
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		overflow: hidden;
	}
	#score>div {
		margin: 0 auto;
	}
	#score .see {
		margin-top: 1.8rem;
		padding-left: 1rem;
		width: 13.2rem;
		height: 13.35rem;
		background-image: url('../assets/images/4-2.png');
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		overflow: hidden;
		text-align: center;
	}
	#score .see header {
		font-family: Tahoma,Helvetica,Arial;
		color: #a51d31;
		font-size: 2rem;
		font-weight: 700;
		margin-top: 7rem;
		margin-bottom: .5rem;
	}
	#score .see div {
		font-size: .95rem;
		color: #3e2415;
		font-weight: lighter;
	}
	#score .button {
		margin-top: 1.2rem;
		margin-bottom: 1.2rem;
		width: 8.85rem;
		height: 3.5rem;
		background-image: url('../assets/images/index3.png');
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		background-position: .6rem 0;
	}
	#score .share {
		width: 8rem;
		height: 10rem;
	}
	#score .share header {
		font-size: .7rem;
		color: #664718;
		margin-top: 2rem;
		margin-bottom: .8rem;
	}
	#score .share img {
		width: 100%;
	}
</style>

