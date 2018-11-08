import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    /*{
      path: '/hello',
      name: 'Hello',
      components: {
        default: Dashboard,
        nav: Header
      },
      meta: {
        requiresAuth: true
      }
    },*/
    {
      path: '/dashboard',
      name: 'dashboard',
      components: {
        default: Dashboard,
        nav: Header
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogin = localStorage.getItem('token') === 'ImLogin'
  if( isLogin ){
    next()
  } else {
    if( to.path !== '/login'){
      next('/login')
    } else {
      next()
    }
  }
  /*
  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser) next('/dashboard')
  else next()
  */
})

export default router