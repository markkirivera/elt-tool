import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RequestFormView from '../views/RequestFormView.vue'
import RequestOverview from '../views/RequestOverview.vue'
import ApprovalView from '../views/ApprovalView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/form',
        name: 'form',
        component: RequestFormView
    },
    {
        path: '/overview',
        name: 'overview',
        component: RequestOverview
    },
    {
        path: '/approvalflow',
        name: 'approvalflow',
        component: ApprovalView
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router