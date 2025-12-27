<script setup>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <main>
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>
