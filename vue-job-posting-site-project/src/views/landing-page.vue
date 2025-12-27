<script setup>
import Hero from '@/components/hero.vue'
import HomeCards from '@/components/home-cards.vue'
import JobsListing from '@/components/job-listings.vue'
</script>

<template>
  <Hero />
  <HomeCards />
  <JobsListing :limit="3" />
</template>