<template>
  <header class="text-white bg-gray-800">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
      <div class="text-2xl font-bold">
        <nuxt-link to="/">Nuxt 3 Content tailwind Starter</nuxt-link>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog" class="hover:text-gray-400">Blog</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>
