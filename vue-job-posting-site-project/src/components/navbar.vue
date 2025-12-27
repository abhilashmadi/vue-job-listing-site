<script setup>
import { useRoute } from 'vue-router'
import { RouteNames } from '@/resources/constants'
import logo from '@/assets/logo.svg'

const route = useRoute()

const isActive = (routeName) => {
  return route.name === routeName
}

</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <router-link class="flex shrink-0 items-center mr-4" :to="{ name: RouteNames.LANDING_PAGE }">
            <div class="h-12 bg-white p-2 rounded-full flex-center">
              <img class="h-7 w-auto" v-bind:src="logo" alt="Vue Jobs" />
            </div>
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </router-link>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <router-link :to="{ name: RouteNames.LANDING_PAGE }"
                :class="['text-white rounded-md px-3 py-2', isActive(RouteNames.LANDING_PAGE) ? 'bg-green-900' : 'hover:bg-green-900']">Home</router-link>
              <router-link :to="{ name: RouteNames.JOBS_PAGE }"
                :class="['text-white rounded-md px-3 py-2', isActive(RouteNames.JOBS_PAGE) ? 'bg-green-900' : 'hover:bg-green-900']">Jobs</router-link>
              <router-link :to="{ name: RouteNames.ADD_JOB_PAGE }"
                :class="['text-white rounded-md px-3 py-2', isActive(RouteNames.ADD_JOB_PAGE) ? 'bg-green-900' : 'hover:bg-green-900']">Add
                Job</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
