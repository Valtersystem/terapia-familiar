<script setup lang="ts">
import Instagram from '../components/Instagram.vue';
import Facebook from '../components/Facebook.vue';

import NavigationLinks from '../components/NavigationLinks.vue';
</script>
<template>
  <div class="h-[96px]" ref="scrollContainer">
    <nav class="bg-white fixed z-50 w-full max-w-screen-3xl">
        <div class="flex flex-wrap items-center justify-between max-[1028px]:justify-center max-[767px]:justify-between mx-auto px-8 py-4 top-0">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://res.cloudinary.com/dtf70ty3b/image/upload/v1711398283/terapia/logo2.png"
                    class="h-16 min-[1028px]:flex hidden max-[767px]:flex" alt="Logo" />
            </a>
            <button data-collapse-toggle="navbar-multi-level" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-multi-level" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <NavigationLinks />
            </div>
            <div class="flex w-full gap-1 md:w-auto">
                <a href="#" target="_blank" rel="">
                    <Instagram />
                </a>
                <a href="#" target="_blank" rel="">
                    <Facebook />
                </a>
            </div>
        </div>
    </nav>
</div>
</template>