<template>
  <section class="lg:py-28 py-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <h3
          class="lg:text-4xl text-3xl text-center font-bold text-black-400 mt-2"
        >
          Học viên nói gì khi học <br />
          IELTS tại Global Education
        </h3>
        <div>
          <p
            class="lg:text-2xl text-base font-medium text-black-400 lg:text-end text-center"
          >
            300+ đánh giá
          </p>
          <p class="mt-1 text-black-300 lg:text-end text-center">
            từ học viên và phụ huynh
          </p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
        <evaluate-card v-for="item in 6" :key="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
