import Vue from 'vue'

import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Classification = () => import('@/views/classification/Classification')
const Shoppingcar = () => import('@/views/shoppingcar/ShoppingCar')
const Profile = () => import('@/views/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classification',
        component: Classification
    },
    {
        path: '/shoppingcar',
        component: Shoppingcar
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;