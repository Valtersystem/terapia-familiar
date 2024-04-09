import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import ('../views/Home.vue')},
  { path: '/terapeutas', component: () => import ('../views/Terapeutas.vue')},
  { path: '/formacoes', component: () => import ('../views/Formacoes.vue')},
  { path: '/biblioteca', component: () => import ('../views/Biblioteca.vue')},
  { path: '/eventos', component: () => import ('../views/Eventos.vue')},
  { path: '/contactos', component: () => import ('../views/Contactos.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router