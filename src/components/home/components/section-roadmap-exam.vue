<template>
  <section id="lo-trinh-luyen-thi" class="lg:pb-28 pb-20 pt-10">
    <div class="container mx-auto">
      <p
        class="lg:text-lg text-base uppercase text-black-300 relative w-fit mx-auto"
      >
        LỘ TRÌNH LUYỆN THI
        <img
          src="/images/icon-subtitle.png"
          alt="icon"
          class="absolute -top-[8px] -left-4 w-4"
        />
      </p>
      <p class="lg:text-4xl text-3xl text-primary font-bold text-center mt-2">
        Lộ Trình 3 Bước Chinh Phục Cánh Cửa Đại Học
      </p>
    </div>

    <div class="lg:container mx-auto">
      <img src="/images/lo-trinh-3-buoc.jpg" class="mt-6 w-full" />
    </div>

    <div
      class="lg:mt-20 mt-14 grid lg:grid-cols-2 grid-cols-1 gap-8 container mx-auto"
    >
      <div>
        <ul>
          <li class="bg-[#F3F3F3] rounded-2xl py-5 px-8">
            <div class="flex space-x-3 items-center">
              <div
                class="rounded-full flex justify-center items-center min-w-[42px] max-w-[42px] min-h-[42px] max-h[42px] bg-white"
              >
                <font-awesome-icon
                  icon="fa-solid fa-graduation-cap"
                  class="text-[#FB6239] text-lg"
                />
              </div>
              <p class="text-xl font-bold uppercase">
                1. Độc quyền ôn mất gốc Bintest by Global Education
              </p>
            </div>
            <p class="text-base text-black-300 mt-3">
              Độc quyền phương pháp ôn bài bản từ mất gốc Bintest của Global
              Education giúp học sinh bám chắc kiến thức và được tổng ôn kĩ từ "
              MẤT GỐC " bám chắc kiến thức nền
            </p>
          </li>
          <li class="bg-[#F3F3F3] rounded-2xl py-5 px-8 mt-6">
            <div class="flex space-x-3 items-center">
              <div
                class="rounded-full flex justify-center items-center min-w-[42px] max-w-[42px] min-h-[42px] max-h[42px] bg-white"
              >
                <font-awesome-icon
                  icon="fa-solid fa-graduation-cap"
                  class="text-[#316AFF] text-lg"
                />
              </div>
              <p class="text-xl font-bold uppercase">
                2. Tổng ôn và phát triển toàn diện Global Education
              </p>
            </div>
            <p class="text-base text-black-300 mt-3">
              Học bài bản ôn từ mất gốc xong sẽ học giai đoạn 2 tổng ôn toàn
              diện bám sát 8+ THPT Quốc Gia
            </p>
          </li>
          <li class="bg-[#F3F3F3] rounded-2xl py-5 px-8 mt-6">
            <div class="flex space-x-3 items-center">
              <div
                class="rounded-full flex justify-center items-center min-w-[42px] max-w-[42px] min-h-[42px] max-h[42px] bg-white"
              >
                <font-awesome-icon
                  icon="fa-solid fa-graduation-cap"
                  class="text-[#FFBE1B] text-lg"
                />
              </div>
              <p class="text-xl font-bold uppercase">
                3. Bộ đề Tiến sĩ Đhqg biên soạn bởi Global Education
              </p>
            </div>
            <p class="text-base text-black-300 mt-3">
              Thí sinh luyện bộ đề độc quyền được biên soạn bởi Tiến sĩ của Đại
              Học Quốc Gia Hà Nội và ứng dụng bộ đề chuẩn form của kì thi giúp
              các bạn đỗ đại học Top 1
            </p>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="/images/anh-chu-dao.jpg"
          alt="anh-chu-dao"
          class="rounded-xl hover:scale-105 cursor-pointer duration-300"
          @click="isShowAdviseDialog = true"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAdviseStore } from "../store/dialog-advise.store";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);
</script>

<style scoped lang="scss"></style>
