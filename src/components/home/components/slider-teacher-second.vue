<template>
  <div>
    <Swiper :modules="modules" :autoplay="{ delay: 1000 }" :loop="true">
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            :src="item.avatar"
            alt="teacher"
            class="w-full h-full object-contain"
          />
          <div
            class="absolute bottom-3 left-3 bg-[#21262D] bg-opacity-40 backdrop-blur-[32px] py-[6px] px-3 flex items-center space-x-1 rounded-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="rgba(255, 255, 255, 0.8)"
            >
              <path
                d="M16.2503 14.5235V17.5469C16.2503 17.6752 16.1912 17.7963 16.0901 17.8753C15.9889 17.9543 15.8571 17.9822 15.7326 17.9511L14.7858 17.7144C14.6531 17.6813 14.5142 17.6813 14.3815 17.7144L13.4347 17.9511C13.3102 17.9822 13.1784 17.9543 13.0772 17.8753C12.9761 17.7963 12.917 17.6752 12.917 17.5469V14.5234"
                stroke="white"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <circle
                cx="14.5837"
                cy="12.1305"
                r="2.91667"
                stroke="white"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
              <path
                d="M10 15.8802H4.16667C3.24619 15.8802 2.5 15.134 2.5 14.2135V4.21354C2.5 3.29307 3.24619 2.54688 4.16667 2.54688H15.8333C16.7538 2.54688 17.5 3.29307 17.5 4.21354V7.54687"
                stroke="white"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.83301 6.29655H13.333"
                stroke="white"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.83301 9.21354H9.16634"
                stroke="white"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.83301 12.1305H8.33301"
                stroke="white"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-sm text-white font-medium">
              {{ item.point }} IELTS Overall
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            :src="item.cer"
            alt="cer"
            class="w-full lg:h-[unset] h-full lg:object-cover object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="w-full rounded-2xl overflow-hidden relative watch-result h-full"
        >
          <img
            :src="'/images/tro-giang-1.jpg'"
            alt="cer"
            class="w-full lg:h-[unset] h-full lg:object-cover object-contain"
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
const props = defineProps({
  item: Object as PropType<any>,
});

const modules = [Autoplay, Navigation];
</script>

<style scoped lang="scss"></style>
