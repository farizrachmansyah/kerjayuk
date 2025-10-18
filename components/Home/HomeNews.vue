<template>
  <section>
    <div class="container mb-3">
      <h1 class="font-semibold">PCS News</h1>
    </div>

    <Swiper
      id="swiper-container-banner"
      :modules="[Pagination]"
      :slides-per-view="1.2"
      :centered-slides="true"
      :space-between="16"
      :loop="true"
      :speed="500"
      :pagination="{
        clickable: true
      }"
      class="swiper-container"
    >
      <SwiperSlide v-for="item in 6" :key="item" class="">
        <nuxt-link to="/" class="block bg-white p-6 rounded-xl shadow-center-lg cursor-pointer" :title="`Item ${item}`">
          <div class="mb-3">
            <div class="flex items-center justify-between gap-4">
              <div class="flex gap-4 items-center">
                <div class="w-[30px] h-[30px] rounded-full overflow-hidden shadow-md">
                  <NuxtImg
                    src="https://placehold.co/30"
                    alt="KejaYuk!"
                    width="30"
                    height="30"
                    loading="lazy"
                    class="object-cover"
                  />
                </div>
                <span class="text-xs text-primary font-semibold">Ana Riswati</span>
              </div>
              <span class="text-xs text-end">Senin<br />30 Mei 2022</span>
            </div>
          </div>
          <ul v-for="text in 4" :key="`text-${text}`">
            <li class="text-xs truncate">Kalimat {{ text }} - Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<style scoped>
:deep(.swiper) {
  padding-bottom: calc(16px + 12px);
}

:deep(.swiper-pagination) {
  @apply flex justify-center bottom-0;

  .swiper-pagination-bullet {
    @apply w-3 h-3 transition-all;
  }
  .swiper-pagination-bullet-active {
    @apply rounded-lg bg-primary;
  }
}
</style>
