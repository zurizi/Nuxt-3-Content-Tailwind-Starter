<template>
  <header class="text-white bg-gray-800">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
      <div class="text-2xl font-bold">
        <nuxt-link to="/">Tailwind Nuxt 3 Starter</nuxt-link>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">link</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">link 2</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hover:text-gray-400">link 3</nuxt-link>
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
