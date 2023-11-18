import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from "../views/ProfileView.vue";
import VacanciesView from "../views/VacanciesView.vue";


const routes = [
  {
    path: "/",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/vacancies",
    name: "vacancies",
    component: VacanciesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
