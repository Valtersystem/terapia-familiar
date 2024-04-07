<script setup lang="ts">
import SlideBanner from '../components/SlideBanner.vue';
import SectionFormacoes from '../components/SectionFormacoes.vue';
import InfoCards from '../components/InfoCards.vue';
import BannerTop from '../components/BannerTop.vue';
import BooksHomepage from '../components/BooksHomepage.vue';
</script>

<template>
  <BannerTop />
  <div class="bg-gray-50">
    <div class="flex text-center w-full justify-center items-center p-12 flex-col">
      <h3 class="title-section">APORTEFAC</h3>
      <p class="text-lg lg:w-1/2 md:w-full w-full md:normal-case text-justify md:text-center"> "Unindo fé e família através da terapia: bem-vindo à Associação Portuguesa de Terapia Familiar Cristã, onde o amor e a orientação divina transformam vidas."
      </p>
    </div>
  </div>

  <SlideBanner class="" />

  <div class="bg-gray-50 rounded-2xl pb-12">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 container">
      <div class="">
        <InfoCards title="O que é Terapia Familiar ?"
          textInfo=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem omnis atque culpa repellendus."
          link="/" linkImg="https://res.cloudinary.com/dtf70ty3b/image/upload/v1710116821/terapia/info1.jpg" />
      </div>
      <div class="">
        <InfoCards title="Seja um Associado APORTEFAC"
          textInfo=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem omnis atque culpa repellendus."
          link="/" linkImg="https://res.cloudinary.com/dtf70ty3b/image/upload/v1710116821/terapia/info2.jpg" />
      </div>
      <div class="">
        <InfoCards title="Formação em Terapia Familiar"
          textInfo=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem omnis atque culpa repellendus."
          link="/" linkImg="https://res.cloudinary.com/dtf70ty3b/image/upload/v1710116821/terapia/info3.jpg" />
      </div>
    </div>
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