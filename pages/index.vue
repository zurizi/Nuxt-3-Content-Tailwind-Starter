<template>
  <section class=" flex justify-center py-12 px-4">
    <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8">
      <ContentDoc path="home">
        <template v-slot="{ doc }">
          <header class="mb-8 text-center">
            <h1 class="text-4xl font-extrabold text-gray-800 mb-4">{{ doc.title }}</h1>
            <p class="text-lg text-gray-600">{{ doc.description }}</p>
          </header>

          <div class="prose prose-indigo">
            <ContentRenderer :value="doc" />
          </div>

          <div class="mt-8 text-center">
            <nuxt-link to="/blog" class="inline-block bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300">
              Explore More Blogs
            </nuxt-link>
          </div>
        </template>

        <template #not-found>
          <p class="text-center text-red-600">Sorry, the document was not found.</p>
        </template>
      </ContentDoc>
    </div>
  </section>
</template>

