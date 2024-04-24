<script setup lang="ts">

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import NavBar from '../src/components/Navbar.vue';
import ContentFooter from '../src/components/ContentFooter.vue';
</script>

<template>
  <div class="max-w-screen-3xl my-0 mx-auto">
    <div class="min-h-screen relative">
      <NavBar />
      <!-- <router-link to="/">Home</router-link> -->
      <main>
        <router-view />
      </main>
      <footer class="bg-gray-50 rounded-2xl mt-12">
        <ContentFooter />
      </footer>
    </div>
  </div>
</template>
