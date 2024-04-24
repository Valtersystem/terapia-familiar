<script setup lang="ts">
import SlideBanner from '../components/SlideBanner.vue';
import SectionFormacoes from '../components/SectionFormacoes.vue';
import SectionCardInfo from '../components/SectionCardInfo.vue';
import BannerTop from '../components/BannerTop.vue';
import BooksHomepage from '../components/BooksHomepage.vue';
</script>

<template>
  <BannerTop />
  <div class="bg-wite">
    <div class="flex text-center w-full justify-center items-center p-12 flex-col">
      <h3 class="title-section">APORTEFAC</h3>
      <p class="text-lg lg:w-1/2 md:w-full w-full md:normal-case text-justify md:text-center"> "Unindo fé e família através da terapia: bem-vindo à Associação Portuguesa de Terapia Familiar Cristã, onde o amor e a orientação divina transformam vidas."
      </p>
    </div>
  </div>

  <SlideBanner class="" />

  <div class="bg-gray-50 rounded-2xl pb-12">
    <SectionCardInfo class="" />
  </div>

  <div class="mt-12">
    <SectionFormacoes />
  </div>

  <div class="bg-gray-50 rounded-2xl mt-12">
    <div class="container">
      <div class="flex text-center w-full justify-center items-center pb-12 flex-col">
        <h2 class="title-section">top ebooks</h2>
      </div>
      <BooksHomepage />
      <div class="text-center">
        <a href="#"
          class="inline-block rounded bg-white px-12 py-3 text-sm font-medium text- text-kashmir-blue-600 hover:text-white border border-solid border-kashmir-blue-600 transition  bg-gradient-to-r hover:from-kashmir-blue-500 hover:to-kashmir-blue-600 focus:outline-none">
          Ver mais
        </a>
      </div>
    </div>
  </div>

</template>