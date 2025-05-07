<template>
  <section class="bg-yellow-300">
    <div
      class="container mx-auto pt-[100px] pb-[72px] grid grid-cols-2 lg:gap-11"
    >
      <div>
        <div class="relative w-fit">
          <h1 class="text-4xl text-primary font-bold">Vinci Education</h1>
          <img
            src="/images/icon-header.svg"
            alt="icon"
            class="absolute -top-[16px] -right-[26px] w-9"
          />
        </div>
        <h2
          class="text-4xl !leading-[45px] font-bold mt-3 text-black-400 relative"
        >
          Tự hào
          <span class="text-4xl font-bold highlight">Trung Tâm Ôn Đại Học</span>
          <br />
          hàng đầu trường Top 1
        </h2>
        <ul class="mt-8">
          <li class="flex space-x-2 items-center">
            <img src="/images/icon-tick.svg" alt="tick" class="w-5" />
            <p class="text-xl text-black-300">
              Độc quyền phương pháp logical thinking
            </p>
          </li>
          <li class="flex space-x-2 items-center mt-2">
            <img src="/images/icon-tick.svg" alt="tick" class="w-5" />
            <p class="text-xl text-black-300">Bintest by Phạm Văn Bình</p>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <img class="w-[236px]" src="/images/anh_1.png" alt="anh_1" />
        <img class="w-[236px]" src="/images/anh_2.png" alt="anh_2" />
        <img class="w-[236px]" src="/images/anh_3.png" alt="anh_3" />
        <img class="w-[236px]" src="/images/anh_4.png" alt="anh_4" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.highlight {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    background: rgb(255, 153, 31);
    bottom: 3px;
    left: 0px;
    height: 10px;
    width: 100%;
    opacity: 0.3;
    z-index: -1;
  }
}
</style>
