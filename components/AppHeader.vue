<template>
  <header class="text-white bg-gray-800">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
      <div class="text-2xl font-bold">
        <nuxt-link to="/">MyLogo</nuxt-link>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Anda dapat menambahkan script TypeScript di sini jika diperlukan
</script>

<style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>
