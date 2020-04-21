import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import order from "../views/order.vue";

Vue.use(VueRouter);
const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/order",
        name: "order",
        component: order
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;