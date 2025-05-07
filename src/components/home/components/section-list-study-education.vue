<template>
  <section class="bg-custom">
    <div class="bg-white container mx-auto box-shadow p-9">
      <img
        src="/images/section-2.jpg"
        alt="section"
        class="w-[600px] mx-auto hover:scale-105 duration-300 cursor-pointer"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bg-custom {
  background: linear-gradient(rgb(255, 249, 241) 0%, rgb(255, 255, 255) 100%);
}

.box-shadow {
  box-shadow: rgba(220, 147, 78, 0) 0px -16px 32px 0px,
    rgba(220, 147, 78, 0.1) 0px -10px 16px 0px;
  border-radius: 32px;
}
</style>
