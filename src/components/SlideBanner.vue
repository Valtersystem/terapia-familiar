<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const photos = [
  'https://res.cloudinary.com/dtf70ty3b/image/upload/v1710109103/terapia/1.jpg',
  'https://res.cloudinary.com/dtf70ty3b/image/upload/v1710109103/terapia/2.jpg',
  'https://res.cloudinary.com/dtf70ty3b/image/upload/v1710109103/terapia/3.jpg',
  'https://res.cloudinary.com/dtf70ty3b/image/upload/v1710109103/terapia/4.jpg',
  'https://res.cloudinary.com/dtf70ty3b/image/upload/v1710109103/terapia/5.jpg',
];
</script>

<template>
  <div class="">
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slidesPerView="1"
      :spaceBetween="0"
      :navigation="true"
      :autoplay="true"
      :autoplayOptions="{ delay: 100 }"
      :loop="true"
    >
      <SwiperSlide v-for="(photo, index) in photos" :key="index">
        <!-- <img :src="photo" alt="" /> -->

        <section class="bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + photo + ')' }">
          <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" ></div>

          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-16">
            <div class="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
              <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                Workshop

                <strong class="block font-extrabold text-kashmir-blue-500">
                  Terapia familiar
                </strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                CONSTRUA UMA FAMÍLIA SAUDÁVEL CONOSCO!
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <a  href="https://workshop-familia-saudavel.vercel.app/" target="_blank"
                  class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-kashmir-blue-500 shadow hover:text-white focus:outline-none focus:ring  sm:w-auto hover:bg-kashmir-blue-500" >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  color: #000;
  padding: 1.75rem;
  border: solid;
  border-radius: 100%;
  background-color: aliceblue;
  opacity: 0.23;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  opacity: 0.1;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.45rem;
}
</style>
