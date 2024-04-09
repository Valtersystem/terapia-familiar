<script setup lang="ts">
import { ref } from 'vue';

import Modal from '../components/Modal.vue';
const props = defineProps({
  title: String,
  textInfo: String,
  linkImg: String,
  text: String,
});

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};
</script>

<template>
  <article
    class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:drop-shadow-2xl transition duration-700 ease-in-out"
  >
    <img alt="" :src="props.linkImg" class="h-56 w-full object-cover" />

    <div class="p-4 sm:p-6">
      <h3 class="text-lg font-medium text-kashmir-blue-800">
        {{ props.title }}
      </h3>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-kashmir-blue-400">
        {{ props.textInfo }}
      </p>

      <span
        class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-kashmir-blue-600 cursor-pointer"
        @click="openModal"
      >
        Saiba mais

        <span
          aria-hidden="true"
          class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
        >
          &rarr;
        </span>
      </span>
    </div>
  </article>

  <Modal :show="modalOpen" @close="modalOpen = false">
    <template #default>
      <div class="relative rounded-lg border border-gray-200 shadow-lg">
        <div class="p-4">      
            <p class="font-medium text-gray-900 mb-4">{{ props.title }}</p>
            <hr class="py-2">
            <div class="text-sm text-gray-500" v-html="props.text"></div>
        </div>
      </div>
    </template>
  </Modal>
</template>


