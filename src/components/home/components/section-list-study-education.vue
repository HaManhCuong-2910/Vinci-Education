<template>
  <div class="container mx-auto mt-12">
    <Swiper
      :modules="modules"
      :autoplay="{ delay: 800 }"
      :spaceBetween="20"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }"
      :loop="true"
    >
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            src="/images/co-so-vat-chat-2.jpg"
            alt="teacher"
            class="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            src="/images/gt-1.jpg"
            alt="teacher"
            class="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            src="/images/gt-2.jpg"
            alt="teacher"
            class="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            src="/images/gt-3.jpg"
            alt="teacher"
            class="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            src="/images/gt-4.jpg"
            alt="teacher"
            class="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            src="/images/gt-5.jpg"
            alt="teacher"
            class="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import "swiper/css/navigation";
import type { PropType } from "vue";
import { Autoplay, Navigation } from "swiper/modules";

const modules = [Autoplay, Navigation];
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.bg-custom {
  background: linear-gradient(rgb(255, 249, 241) 0%, rgb(255, 255, 255) 100%);
}

.box-shadow {
  box-shadow: rgba(220, 147, 78, 0) 0px -16px 32px 0px,
    rgba(220, 147, 78, 0.1) 0px -10px 16px 0px;
  border-radius: 32px;
}

@include mediaMobileTabletTo1280 {
  .box-shadow {
    box-shadow: unset;
    border-radius: unset;
  }
}
</style>
