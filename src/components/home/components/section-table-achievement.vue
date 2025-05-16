<template>
  <div id="bang-vang-thanh-tich" class="lg:py-28 py-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-12 items-center">
        <div>
          <img src="/images/crown.svg" alt="crown" class="w-14 mx-auto" />
          <h3
            class="lg:text-4xl text-3xl font-bold text-black-400 mt-2 text-center"
          >
            Bảng vàng thành tích <br />
            của học viên Global Education
          </h3>
        </div>
        <div>
          <p
            class="text-2xl font-medium text-black-400 lg:text-end text-center"
          >
            250+ học viên
          </p>
          <p class="mt-1 text-black-300 lg:text-end text-center">
            có kết quả trên 8.0 IELTS
          </p>
        </div>
      </div>

      <div class="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-4">
        <div v-for="(item, index) in dataShow" :key="index">
          <div
            class="relative border-custom rounded-3xl aspect-[258/192] watch-result overflow-hidden"
          >
            <img :src="item.avatar" alt="thanh-tich" class="w-full h-full" />
            <button
              class="button-absolute"
              @click="
                () => {
                  dataDialog.isShowDialog = true;
                  dataDialog.name = item.name;
                  dataDialog.school = item.school;
                  dataDialog.cer = item.cer;
                }
              "
            >
              Xem result
              <img
                src="/images/arrow-right.svg"
                alt="arrow-right"
                class="w-4"
              />
            </button>
            <div
              class="desc absolute bg-white bg-opacity-80 rounded-xl pt-2 px-4 pb-[14px] bottom-3 backdrop-blur-[32px] left-3"
            >
              <p class="text-primary text-3xl font-bold">{{ item.point }}</p>
              <p class="font-bold mt-1">IELTS</p>
            </div>
          </div>
          <div class="mt-4 px-4">
            <p class="text-2xl font-semibold">{{ item.name }}</p>
            <p class="text-black-300 line-clamp-1 mt-2">
              {{ item.school }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="dataDialog.isShowDialog"
    align-center
    :show-close="false"
    :width="'500px'"
    :header-class="'!pb-0'"
    :class="'max-w-[90%] !rounded-xl'"
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
        <p class="text-2xl font-semibold text-black-400">
          {{ dataDialog.name }}
        </p>
        <p class="text-black-300 line-clamp-1 mt-1">
          {{ dataDialog.school }}
        </p>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
const dataDialog = ref({
  isShowDialog: false,
  name: "",
  school: "",
  cer: "",
});

const dataShow = ref([
  {
    avatar: "/images/trinh-khanh-vy.jpg",
    point: 8.5,
    name: "Nguyễn Quang Minh",
    school: "THPT chuyên Trần Đại Nghĩa - HCM",
    cer: "/images/cer-1.png",
  },
  {
    avatar: "/images/ha-anh-duong.jpg",
    point: 8.5,
    name: "Nguyễn Quang Minh",
    school: "THPT chuyên Trần Đại Nghĩa - HCM",
    cer: "/images/cer-1.png",
  },
  {
    avatar: "/images/tran-viet-thanh.jpg",
    point: 8.5,
    name: "Nguyễn Quang Minh",
    school: "THPT chuyên Trần Đại Nghĩa - HCM",
    cer: "/images/cer-1.png",
  },
  {
    avatar: "/images/le-chi-thao.jpg",
    point: 8.5,
    name: "Nguyễn Quang Minh",
    school: "THPT chuyên Trần Đại Nghĩa - HCM",
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
      opacity: 1;
      visibility: visible;
    }

    .button-absolute {
      opacity: 1;
      visibility: visible;
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
