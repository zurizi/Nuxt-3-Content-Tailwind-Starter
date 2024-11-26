<template>
  <main class="py-10">
    <div class="container mx-auto px-4">
      <ContentDoc>
        <!-- Slot Default -->
        <template v-slot="{ doc }">
          <article class="bg-white rounded-lg shadow-md p-6">
            <header class="mb-6">
              <h1 class="text-3xl font-bold text-gray-800 mb-2">
                {{ doc.title }}
              </h1>
              <p class="text-gray-600 text-sm">{{ doc.description }}</p>
              <p class="text-gray-500 text-xs">{{ doc.date }}</p>
            </header>
            <section class="prose prose-indigo max-w-none">
              <ContentRenderer :value="doc" />
            </section>
          </article>
        </template>
        <!-- Slot Not Found -->
        <template #not-found>
          <div class="text-center">
            <h1 class="text-2xl font-bold text-red-600">Document not found</h1>
            <p class="text-gray-600">
              Please check the path or create the document.
            </p>
          </div>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>
