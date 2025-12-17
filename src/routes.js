import { createWebHistory, createRouter } from 'vue-router'

import JobPage from '@/views/job-page.vue'
import JobsPage from '@/views/jobs-page.vue'
import LandingPage from '@/views/landing-page.vue'
import AddJobPage from '@/views/addjob-page.vue'

const routes = [
  { path: '/', component: LandingPage, name: "landingPage" },
  { path: '/jobs', component: JobsPage, name: "jobsPage" },
  { path: '/job/:id', component: JobPage, name: "jobPage" },
  { path: '/addjob', component: AddJobPage, name: "addJobPage" }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})