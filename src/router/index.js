import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import BidangView from '../views/BidangView.vue'
import UnduhanView from '../views/UnduhanView.vue'
import RuangView from '../views/RuangView.vue'
import KontakView from '../views/KontakView.vue'
import Dokumentasi_1 from '../views/Dokumentasi_1.vue'
import Dokumentasi_2 from '../views/Dokumentasi_2.vue'
import Dokumentasi_3 from '../views/Dokumentasi_3.vue'
import Ruang_1 from '../views/Ruang_1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/bidang',
    name: 'bidang',
    component: BidangView,
  },
  {
    path: '/unduhan',
    name: 'unduhan',
    component: UnduhanView,
  },
  {
    path: '/ruang',
    name: 'ruang',
    component: RuangView,
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: KontakView,
  },
  {
    path: '/dokumentasi/dokumentasi_1',
    name: 'dokumentasi_1',
    component: Dokumentasi_1,
  },
  {
    path: '/dokumentasi/dokumentasi_2',
    name: 'dokumentasi_2',
    component: Dokumentasi_2,
  },
  {
    path: '/dokumentasi/dokumentasi_3',
    name: 'dokumentasi_3',
    component: Dokumentasi_3,
  },
  {
    path: '/ruang/ruang_1',
    name: 'ruang',
    component: Ruang_1,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
