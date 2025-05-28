<template>
  <section id="hinh-thuc-hoc" class="lg:py-28 pb-20 container mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
      <div>
        <p class="text-lg uppercase text-black-300 relative w-fit pl-2">
          HÌNH THỨC HỌC
          <img
            src="/images/icon-subtitle.png"
            alt="icon"
            class="absolute -top-[8px] -left-2 w-4"
          />
        </p>
        <h3 class="text-4xl text-primary mt-5 font-bold">
          Cơ sở vật chất đạt chuẩn quốc tế ISO 41001 tại Global Education
        </h3>

        <p class="text-black-300 mt-3">
          Nằm ngay giữa trung tâm thành phố Hà Nội phố 290 Kim Mã , Quận Ba Đình
          ngay sát Lotte Tower và Vincom Metropolis
        </p>
        <button-common
          :class="'w-[293px] max-w-full !h-[53px] shadow-btn duration-300 hover:scale-105 !rounded-2xl mt-8'"
          @click="isShowAdviseDialog = true"
        >
          <div class="relative">
            <p class="font-medium text-sm">NHẬN TƯ VẤN KHÓA HỌC</p>
            <div
              class="bg-white w-5 h-5 rounded-full flex justify-center items-center absolute -right-9 top-1/2 -translate-y-1/2"
            >
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="text-primary text-sm"
              />
            </div>
          </div>
        </button-common>
      </div>
      <div class="rounded-xl overflow-hidden">
        <div class="f-carousel" id="myCarousel">
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-1.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-1.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-1.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-2.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-2.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-2.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-3.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-3.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-3.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-4.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-4.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-4.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-5.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-5.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-5.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAdviseStore } from "../store/dialog-advise.store";
// @ts-ignore
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

// @ts-ignore
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);

onMounted(() => {
  new Carousel(
    document.getElementById("myCarousel"),
    {
      Dots: false,
      Thumbs: {
        type: "classic",
      },
    },
    {
      Thumbs,
    }
  );

  Fancybox.bind('[data-fancybox="gallery"]', {});
});
</script>

<style scoped lang="scss">
.shadow-btn {
  box-shadow: rgb(104, 104, 104) 0px 15px 20px -15px;
}

:deep(.f-thumbs__track) {
  padding-bottom: 0px !important;
}

:deep(.f-button) {
  color: #fff !important;
}
</style>
