import { createRouter, createWebHistory } from "vue-router";
import ProcedureList from "../views/ProcedureList.vue";
import ProcedureCreate from "../views/ProcedureCreate.vue";
import ProcedureDetail from "../views/ProcedureDetail.vue";

const routes = [
  { path: "/", component: ProcedureList },
  { path: "/create", component: ProcedureCreate },
  { path: "/procedures/:id", component: ProcedureDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
