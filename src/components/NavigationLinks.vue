<script setup lang="ts">
import Instagram from '../components/Instagram.vue';
import Facebook from '../components/Facebook.vue';
</script>
<template>
  <ul
    class="flex flex-col justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">

    <li>
      <a href="#" class="nav-link">Home </a>
    </li>

    <li>
      <a href="#" class="nav-link">Terapeutas
        <span
          class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
          Ambience
        </span>
      </a>
    </li>

    <li>
      <a href="#" class="nav-link">Formações</a>
    </li>

    <li>
      <a href="#" class="nav-link">Biblioteca</a>
    </li>

    <li>
      <a href="#" class="nav-link">Eventos</a>
    </li>

    <li>
      <a href="#" class="nav-link">Contactos</a>
    </li>

    <!-- <li class="min:[889px]:hidden flex">
      <a href="#" target="_blank" rel="" class="nav-link">
        <Instagram />
      </a>
      <a href="#" target="_blank" rel="" class="nav-link">
        <Facebook />
      </a>
    </li> -->
  



  </ul>
</template>