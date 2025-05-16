<template>
  <section id="lo-trinh-luyen-thi" class="lg:pb-28 pb-20 pt-16">
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
              <p class="text-xl font-bold">1. XÂY DỰNG KIẾN THỨC NỀN TẢNG</p>
            </div>
            <p class="text-base text-black-300 mt-3">
              Xây dựng lại kiến thức từ đầu, giúp học viên nắm chắc kiến thức
              nền tảng bám sát nhất với cấu trúc đề thi ĐGNL.
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
              <p class="text-xl font-bold">2. ÔN LUYỆN TOÀN DIỆN</p>
            </div>
            <p class="text-base text-black-300 mt-3">
              Trang bị cho thí sinh tất cả các kiến thức dạng bài kĩ năng cần
              thiết cho kì thi ĐGNL ĐHQG HN cho từng chuyên đề
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
              <p class="text-xl font-bold">3. LUYỆN ĐỀ & THI THỬ</p>
            </div>
            <p class="text-base text-black-300 mt-3">
              Giúp thí sinh học sâu rộng các phần kiến thức mức độ chuyên sâu và
              ứng dụng thực chiến với bộ đề thi chuẩn
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
