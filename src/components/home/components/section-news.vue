<template>
  <section class="mt-28 container mx-auto">
    <p class="text-center text-sm">Được đánh giá tốt từ các đơn vị uy tín</p>
    <h3 class="text-4xl mt-3 font-bold text-center">Báo chí viết về IZONE</h3>
    <div class="flex flex-wrap gap-4">
      <a
        v-for="item in listNews"
        :key="item.logo"
        :href="item.url"
        class="flex justify-center items-center aspect-[271/118] basis-[271px] py-2 px-5 rounded-2xl duration-300 hover:bg-[#FAECEC]"
      >
        <img src="" alt="" srcset="" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const listNews = ref([
  {
    logo: "/images/httv-9.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
  {
    logo: "/images/vtv7.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
  {
    logo: "/images/bao-thanh-nien.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
  {
    logo: "/images/tuoi-tre.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
  {
    logo: "/images/nhan-dan.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
  {
    logo: "/images/bao-thanh-nien.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
  {
    logo: "/images/vtv-24.png",
    url: "https://youtu.be/LTkW7oiLSU0",
  },
]);
</script>

<style scoped lang="scss"></style>
