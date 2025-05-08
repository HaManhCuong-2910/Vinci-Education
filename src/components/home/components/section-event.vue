<template>
  <section class="lg:py-28 py-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <h3
          class="lg:text-4xl text-3xl text-center font-bold text-black-400 mt-2"
        >
          Sự kiện tiêu biểu <br />
          của Vinci Education
        </h3>
        <div>
          <p
            class="lg:text-2xl text-base font-medium text-black-400 lg:text-end text-center"
          >
            1000+ buổi chia sẻ
          </p>
          <p class="mt-1 text-black-300 lg:text-end text-center">
            Được các trường Đại học & Trung học mời tham dự
          </p>
        </div>
      </div>

      <div class="mt-14 grid lg:grid-cols-3 grid-cols-1 gap-6">
        <event-card v-for="item in 9" :key="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
