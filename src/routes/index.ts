import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue';
import Terapeutas from '../views/Terapeutas.vue';
import Formacoes from '../views/Formacoes.vue';
import Biblioteca from '../views/Biblioteca.vue';
import Eventos from '../views/Eventos.vue';
import Contactos from '../views/Contactos.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/terapeutas', component: Terapeutas },
  { path: '/formacoes', component: Formacoes },
  { path: '/biblioteca', component: Biblioteca },
  { path: '/eventos', component: Eventos },
  { path: '/contactos', component: Contactos },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router