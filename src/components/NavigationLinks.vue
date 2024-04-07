<script setup lang="ts">

</script>
<template>
  <ul
    class="flex flex-col justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">

    <li>
     <router-link class="nav-link" to="/">Home</router-link> 
    </li>

    <li>
      <!-- <a href="#" class="nav-link">Terapeutas</a> -->
      <router-link class="nav-link" to="terapeutas">Terapeutas</router-link> 
    </li>

    <li>
      <!-- <a href="#" class="nav-link">Formações</a> -->
      <router-link class="nav-link" to="formacoes">Formações</router-link> 
    </li>

    <li>
      <!-- <a href="#" class="nav-link">Biblioteca</a> -->
      <router-link class="nav-link" to="biblioteca">Biblioteca</router-link> 
    </li>

    <li>
      <!-- <a href="#" class="nav-link">Eventos</a> -->
      <router-link class="nav-link" to="eventos">Eventos</router-link> 
    </li>

    <li>
      <!-- <a href="#" class="nav-link">Contactos</a> -->
      <router-link class="nav-link" to="contactos">Contactos</router-link> 
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