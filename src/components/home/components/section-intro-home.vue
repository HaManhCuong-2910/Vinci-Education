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
      </div>
      <div>dsa</div>
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
