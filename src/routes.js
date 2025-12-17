import { createWebHistory, createRouter } from 'vue-router'
import { RouteNames } from "./resources/constants"

const LandingPage = () => import('@/views/landing-page.vue')
const JobsPage = () => import('@/views/jobs-page.vue')
const JobPage = () => import('@/views/job-page.vue')
const AddJobPage = () => import('@/views/addjob-page.vue')
const NotFoundPage = () => import('@/views/not-found-page.vue')

const routes = [
  { path: '/', component: LandingPage, name: RouteNames.LANDING_PAGE },
  { path: '/jobs', component: JobsPage, name: RouteNames.JOBS_PAGE },
  { path: '/job/:id', component: JobPage, name: RouteNames.JOB_PAGE },
  { path: '/add-job', component: AddJobPage, name: RouteNames.ADD_JOB_PAGE },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, name: RouteNames.NOT_FOUND_PAGE }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})