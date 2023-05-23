import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Article from "@/views/Article";
import NotFound from "@/views/NotFound";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/article',
        name: 'Article',
        component: Article,
    },
    {
        path: "/:pathMatch(.*)*", // 使用通配符捕获所有未定义的路由
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;