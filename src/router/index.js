import { createRouter, createWebHistory } from 'vue-router'
import InputGroup from '@/components/EditUser.vue'
import ListUser from '@/components/ListUser.vue'
import AddUser from '@/components/AddUser'

const routes = [
  { path: '/', component: ListUser },
  { path: '/user', component: AddUser },
  { path: '/edituser/:email', component: InputGroup,     props: route => ({ query: route.query.email }) }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router