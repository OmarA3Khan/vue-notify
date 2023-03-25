import { createWebHistory, createRouter } from "vue-router";
import Landing from '../views/Landing';
import ThankYou from '../views/ThankYou';

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/thankyou",
    name: "Thankyou",
    component: ThankYou,
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;