import {createRouter, createWebHistory} from 'vue-router'

import TodoList from '../components/TodoList.vue'
import Info from '../components/Info.vue'

const routes = [
    { path: '/', component: TodoList },
    { path: '/about', component: Info },
  ]

 const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;