<script setup>
import JobsFilter from '@/components/jobs-filter.vue'
import JobListings from "@/components/job-listings.vue";
</script>

<template>
  <JobsFilter />
  <JobListings :showViewMore="false" />
</template>