<script setup lang="ts">
defineProps({
    title: String,
    textInfo: String,
    link: String,
    linkImg: String
});
</script>

<template>
<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:drop-shadow-2xl transition duration-700 ease-in-out">
  <img
    alt=""
    :src="linkImg"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-kashmir-blue-800">
        {{ title }}
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-kashmir-blue-400">
      {{ textInfo }}
    </p>

    <a :href="link" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-kashmir-blue-600">
      Saiba mais

      <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>
</template>


