<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function refreshPage() {
  window.location.reload();
}

function goBack() {
  router.go(-1);
}

</script>

<template>
  <section class="flex flex-1 min-h-[85vh] flex-col justify-center items-center text-center py-12">
    <i class="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>

    <div class="flex gap-2">
      <button @click="refreshPage" class="text-white bg-blue-700 hover:bg-blue-900 rounded-md px-3 py-2">
        <i class="fa-solid fa-arrows-rotate"></i>
        Refresh
      </button>

      <button @click="goBack" class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2">
        <i class="fa-solid fa-house"></i>
        Go Back
      </button>
    </div>
  </section>
</template>