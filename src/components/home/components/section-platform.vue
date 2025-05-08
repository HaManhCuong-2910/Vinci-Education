<template>
  <section id="hinh-thuc-hoc" class="lg:py-28 py-20 container mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div>
        <p class="text-lg uppercase text-black-300 relative w-fit pl-3">
          HÌNH THỨC HỌC
          <img
            src="/images/icon-subtitle.png"
            alt="icon"
            class="absolute -top-[8px] -left-4 w-4"
          />
        </p>
        <h3 class="text-4xl text-primary mt-5 font-bold">
          Nền Tảng Học của Vinci Education
        </h3>

        <p class="text-black-300 mt-3">
          Bắt đầu từ tháng 6/2023, Edubit đồng hành cùng trung tâm VNEs trong
          việc chuyển đổi số nền tảng giảng dạy và đào tạo.
        </p>
        <p class="text-black-300 mt-3">
          Edubit sẽ là đơn vị chịu trách nhiệm cung cấp nền tảng số trong việc
          giảng dạy, tạo đề thi, làm bài và các tính năng liên quan nhằm đem lại
          trải nghiệm tốt nhất cho cả học sinh và giảng viên VNES.
        </p>
        <button-common
          :class="'w-[293px] !h-[53px] shadow-btn duration-300 hover:scale-105 !rounded-2xl mt-8'"
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
      <div>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/orbD29EKvdk?si=pkQmQ6dgVdsdR3K7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAdviseStore } from "../store/dialog-advise.store";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);
</script>

<style scoped lang="scss">
.shadow-btn {
  box-shadow: rgb(104, 104, 104) 0px 15px 20px -15px;
}
</style>
