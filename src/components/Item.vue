<template>
  <div id="item">
			<public>
				<template v-slot:header>
					<span class="header_question">题目{{num}}</span>
				</template>
				<template v-slot:content>
					<img src="@/assets/images/index4.png" alt="" class="content">
					<div class="questions">
						<span>{{math}}</span>
						<ul>
							{{item}}
							<li @click="isSelect('A')">
								<span class="en A">A</span>
								<span>{{selects.A}}</span>
							</li>
							<li @click="isSelect('B')">
								<span class="en B">B</span>
								<span>{{selects.B}}</span>
							</li>
							<li @click="isSelect('C')">
								<span class="en C">C</span>
								<span>{{selects.C}}</span>
							</li>
						</ul>
					</div>
				</template>
				<template v-slot:button>
					<a href="javascript:void(0)" @click="nextBtn">
						<img src="@/assets/images/index2.png" alt="" class="button">
					</a>
				</template>
			</public>
	</div>
</template>

<script>
	import Public from './Public.vue'
	import axios from 'axios'
	var Mock = require('mockjs')
	export default {
		name: 'Item',
		components: {
			Public
		},
		data() {
			return {
				arr: [],
				num: 1,
				select: false,
				spans: document.getElementsByClassName('en'),
				score: 0,
				az: ''
			}
		},
		props: ['_arr'],
		created() {
			axios({
					url: 'data.json'
			}).then(res => {
					this.arr = res
			}).catch(err => {
					console.log(err)
			}),
			Mock.mock('data.json',{
				"array": [
					{
						"math": "题目一",
						"A": "80分钟",
						"B": "800分钟",
						"C": "8小时",
						"item": "爸爸每天工作（ ）。",
						"correct": "C"
					},
					{
						"math": "题目二",
						"A": 3,
						"B": 6,
						"C": 9,
						"item": "（ ）时整，分针和时针成一条直线。",
						"correct": "B"
					},
					{
						"math": "题目三",
						"A": "1秒",
						"B": "5秒",
						"C": "1分",
						"item": "秒针从数字1走到数字2，表示经过了（ ）。",
						"correct": "A"
					},
					{
						"math": "题目四",
						"A": "1小时10分",
						"B": "8小时40分",
						"C": "9小时",
						"item": "火车下午4：15出发，路上用了4小时25分钟，晚上（ ）到达。",
						"correct": "B"
					},
					{
						"math": "题目五",
						"A": "2圈",
						"B": "2大格",
						"C": "20大格",
						"item": "时针走2大格相当于分针走（ ）。",
						"correct": "A"
					}
				]
			})
		},
		computed: {
			item() {
				return this.arr.data ? this.arr.data.array[this.num-1].item : ''
			},
			selects() {
				return this.arr.data ? this.arr.data.array[this.num-1] : ''
			},
			math() {
				return this.arr.data ? this.arr.data.array[this.num-1].math : ''
			}
		},
		methods: {
			nextBtn() {
				if (this.select) {
					if (this.arr.data.array[this.num-1].correct === this.az) {
						this.$store.commit('score_20')
					} 
					if(this.num === this.arr.data.array.length) {
						this.$router.push('/score')
					}
					this.num<5 ? this.num++ : this.num == 5
					for(item of this.spans) {
						item.style.backgroundColor = 'transparent'
					}
				} else {
					alert('还没有选择答案哦')
				}
			},
			isSelect(az) {
				this.az = az
				this.select = true
				for(item of this.spans) {
					item.style.backgroundColor = 'transparent'
				}
				document.querySelector('.' + az).style.backgroundColor = 'rgb(238, 129, 5)'
			}
		}
	}
</script>

<style scoped>
	#item  .header_question{
		position:absolute;
		top:8rem;
		left: 1.5rem;
		font-size:0.8rem;
		color: rgb(160, 75, 6);
	}
	#item .content {
		width: 19.26rem;
		height: 17rem;
		position: absolute;
		top: 6.5rem;
		left: 50%;
		margin-left: -9.6rem;
	}
	#item .questions {
		width: 13.26rem;
		height: 17rem;
		position: absolute;
		top: 9.5rem;
		left: 50%;
		margin-left: -6.6rem;
		font-size: 1rem;
		color: #fff;
	}
	#item .questions ul li {
		width: 100%;
		height: 2rem;
		font-size: .8rem;
		line-height:2rem;
		position: relative;
	}
	#item .questions ul li .en {
		
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		line-height: 1rem;
		text-align:center;
		position: absolute;
		top: .5rem;
	}
	#item .questions ul li span:last-of-type {
		margin-left: 2rem;
	}
	#item a .button {
		width: 6.37rem;
		height: 3.08rem;
		position: absolute;
		left: 50%;
		margin-left: -3rem;
		top: 24.5rem;
	}
</style>
