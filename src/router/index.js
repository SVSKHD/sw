import { createRouter, createWebHistory } from 'vue-router'
//Layout
import CommonLayout from "../Layout/CommonLayout.vue"
//pages
import HomeView from '../views/HomeView.vue'
import CategoryView from "../views/categoryView.vue"

const routes = [
  {
    path: "/layout",
    name: "Layout",
    component: CommonLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/categories',
        name: 'categories',
        component: CategoryView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
