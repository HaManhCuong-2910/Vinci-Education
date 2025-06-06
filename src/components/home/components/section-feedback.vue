<template>
  <section class="lg:py-28 py-20 bg-yellow-300">
    <div class="container mx-auto">
      <h3 class="lg:text-4xl text-3xl font-bold text-primary text-center">
        Feedback học viên
      </h3>
      <ul>
        <li class="text-black-300 mt-4">
          💬 Feedback học viên – Niềm tin được kiểm chứng
        </li>
        <li class="text-black-300 mt-3">
          🌟 "Em từng mất gốc hoàn toàn môn Toán, nhưng nhờ phương pháp của
          Global Education và sự kèm cặp sát sao từ thầy cô, em đã đạt 28.7 điểm
          trong kỳ thi THPT Quốc gia. Một hành trình thực sự thay đổi tư duy và
          kết quả!"
        </li>
        <li class="text-black-300 mt-3">
          ✅ — Nguyễn Thị Mai Anh, Học sinh 2K6, đỗ Đại học Kinh tế Quốc dân
        </li>
      </ul>
    </div>

    <div class="mt-10">
      <div
        ref="container"
        class="keen-slider lg:container mx-auto cursor-pointer"
      >
        <div
          v-for="(item, index) in dataShow"
          :key="index"
          class="keen-slider__slide"
        >
          <div class="w-full rounded-xl overflow-hidden relative watch-result">
            <img
              :src="item.avatar"
              alt="teacher"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dataDialog.isShowDialog"
      align-center
      :show-close="false"
      :width="'500px'"
      :class="'max-w-[90%] !rounded-xl'"
      :header-class="'!pb-0'"
      :lock-scroll="false"
    >
      <div class="relative">
        <button class="button-close" @click="dataDialog.isShowDialog = false">
          <svg
            size="24"
            width="24"
            height="24"
            class="Icon__StyledIcon-sc-17nvvtn-0 hhUpwk"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M17.6 6.4L6.4 17.6m11.2 0L6.4 6.4"
            ></path>
          </svg>
        </button>
        <img :src="dataDialog.cer" loading="lazy" alt="image" />
        <div class="mt-4">
          <p class="lg:text-2xl text-base font-semibold text-black-400">
            {{ dataDialog.name }}
          </p>
          <p class="text-black-300 line-clamp-1 mt-1">
            {{ dataDialog.school }}
          </p>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script setup lang="ts">
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/vue.es";

const [container] = useKeenSlider({
  loop: true,
  mode: "free",
  slides: {
    origin: "center",
    perView: 5,
    spacing: 15,
  },
  breakpoints: {
    "(max-width: 600px)": {
      slides: { perView: 1.2, origin: "center", spacing: 15 },
    },
    "(min-width: 601px)": {
      slides: { perView: 1.2, origin: "center", spacing: 15 },
    },
    "(min-width: 1024px)": {
      slides: { perView: 3, origin: "center", spacing: 15 },
    },
  },
});

const dataDialog = ref({
  isShowDialog: false,
  name: "",
  school: "",
  cer: "",
});

const dataShow = ref([
  {
    avatar: "/images/feed-back-1.jpg",
  },
  {
    avatar: "/images/feed-back-2.jpg",
  },
  {
    avatar: "/images/feed-back-3.jpg",
  },
  {
    avatar: "/images/feed-back-4.jpg",
  },
  {
    avatar: "/images/feed-back-5.jpg",
  },
  {
    avatar: "/images/feed-back-6.jpg",
  },
  {
    avatar: "/images/feed-back-7.jpg",
  },
  {
    avatar: "/images/feed-back-8.jpg",
  },
]);
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";

.keen-slider {
  position: relative;

  @include mediaMobileTabletTo1280 {
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }

  &::before {
    left: 0px;
    background: linear-gradient(
      to right,
      rgb(255, 249, 241) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    position: absolute;
    top: 0px;
    width: 140px;
    height: 100%;
    z-index: 1;
    transition: 400ms;
    pointer-events: none;
  }

  &::after {
    right: 0px;
    background: linear-gradient(
      to left,
      rgb(255, 249, 241) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    position: absolute;
    top: 0px;
    width: 140px;
    height: 100%;
    z-index: 1;
    transition: 400ms;
    pointer-events: none;
  }
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

  // &:hover {
  //   &::after {
  //     opacity: 1;
  //     visibility: visible;
  //   }

  //   .button-absolute {
  //     opacity: 1;
  //     visibility: visible;
  //   }
  // }

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
</style>
