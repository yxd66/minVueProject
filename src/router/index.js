import { createRouter, createWebHistory } from 'vue-router'
var Star = ()=>import('@/components/Star.vue')
var Item = ()=>import('@/components/Item.vue')
var Score = ()=>import('@/components/Score.vue')

const routes = [
  {
		path: '/',
		name: 'Star',
		component: Star
	},
	{
		path: '/item',
		name: 'Item',
		component: Item
	},
	{
		path: '/score',
		name: 'Score',
		component: Score
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
