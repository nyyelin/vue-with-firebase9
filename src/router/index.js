import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Create from "../views/Create.vue";
import Tag from "../views/Tag.vue";
import RealTime from "../views/RealTime.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    props: true,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    props: true,
  },
  {
    path: "/realTime",
    name: "realTime",
    component: RealTime,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
