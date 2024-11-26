<template>
    <main class="py-10">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-gray-800 mb-8">Blog Posts</h1>
        <ContentList path="/blog">
          <!-- Slot Default -->
          <template #default="{ list }">
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <nuxt-link
                v-for="blog in list"
                :key="blog._path"
                :to="blog._path"
                class="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ blog.title }}
                </h2>
                <p class="text-gray-600 text-sm">
                  {{ blog.description }}
                </p>
              </nuxt-link>
            </div>
          </template>
          <!-- Slot Not Found -->
          <template #not-found>
            <p class="text-center text-gray-500 text-lg">No blogs found.</p>
          </template>
        </ContentList>
      </div>
    </main>
  </template>
  