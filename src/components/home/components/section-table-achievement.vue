<template>
  <div id="bang-vang-thanh-tich" class="lg:py-24 py-16">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-12 items-center">
        <div>
          <img
            src="/images/crown.svg"
            alt="crown"
            class="w-14 lg:mx-0 mx-auto"
          />
          <h3
            class="lg:text-4xl text-3xl font-bold text-black-400 mt-2 lg:text-left text-center"
          >
            Bảng vàng thành tích <br />
            của học viên Global Education
          </h3>
        </div>
        <div>
          <p
            class="text-2xl font-medium text-black-400 lg:text-end text-center"
          >
            1500+ học viên
          </p>
          <p class="mt-1 text-black-300 lg:text-end text-center">
            có kết quả đỗ đại học Top 1 Ngoại thương , Bách Khoa ,..
          </p>
        </div>
      </div>

      <div class="mt-10">
        <Swiper
          :modules="modules"
          :autoplay="{ delay: 800 }"
          :spaceBetween="20"
          :breakpoints="{
            '640': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
          :loop="true"
        >
          <SwiperSlide v-for="(item, index) in dataShow" :key="index">
            <div class="relative rounded-3xl aspect-[258/192] overflow-hidden">
              <img :src="item.avatar" alt="thanh-tich" class="w-full h-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const modules = [Autoplay, Navigation];
const dataShow = ref([
  {
    avatar: "/images/trinh-khanh-vy.jpg",
    point: 8.5,
    name: "Trịnh Khánh Vy",
    school: "",
    cer: "/images/cer-1.png",
  },
  {
    avatar: "/images/ha-anh-duong.jpg",
    point: 8.5,
    name: "Hà Ánh Dương",
    school: "",
    cer: "/images/cer-1.png",
  },
  {
    avatar: "/images/tran-viet-thanh.jpg",
    point: 8.5,
    name: "Trần Việt Thành",
    school: "",
    cer: "/images/cer-1.png",
  },
  {
    avatar: "/images/le-chi-thao.jpg",
    point: 8.5,
    name: "Lê Chí Thảo",
    school: "",
    cer: "/images/cer-1.png",
  },
]);
</script>

<style scoped lang="scss">
.border-custom {
  border: 1px solid rgb(227, 231, 237);
}
.button-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  padding: 8px;
  background-color: white;
  color: black;
  border: 0px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
}

.watch-result {
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  &:hover {
    &::after {
      // opacity: 1;
      // visibility: visible;
    }

    .button-absolute {
      // opacity: 1;
      // visibility: visible;
    }
  }

  .button-absolute {
    padding: 12px;
    background-color: transparent;
    color: rgb(255, 255, 255);
    border: 0px;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
  }
}
</style>
