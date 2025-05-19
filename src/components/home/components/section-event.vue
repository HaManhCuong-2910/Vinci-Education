<template>
  <section class="lg:py-28 py-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <h3
          class="lg:text-4xl text-3xl text-center font-bold text-black-400 mt-2"
        >
          Sự kiện tiêu biểu <br />
          của Global Education
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
        <event-card
          v-for="(item, index) in dataShow"
          :key="index"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dataShow = ref([
  {
    thumbnail: "/images/tin-tuc.jpg",
    title: "Diễn giả Phạm Văn Bình",
    description:
      "Tháng 5/2025 , Tại trường Đại Học Ngoại Ngữ - Đại Học Quốc Gia Hà Nội , Giám đốc Global Education - Anh Phạm Văn Bình đã chính thức là diễn giả tại sự kiện cùng sinh viên trường đại học Ngoại Ngữ",
  },
  {
    thumbnail: "/images/tin-tuc-2.jpg",
    title: "Diễn giả Phạm Văn Bình",
    description:
      "Tháng 5/2025 , Tại trường Đại Học Ngoại Ngữ - Đại Học Quốc Gia Hà Nội , Giám đốc Global Education - Anh Phạm Văn Bình đã chính thức là diễn giả tại sự kiện cùng sinh viên trường đại học Ngoại Ngữ",
  },
  {
    thumbnail: "/images/tin-tuc-3.jpg",
    title: "Diễn giả Phạm Văn Bình",
    description:
      "Tháng 5/2025 , Tại trường Đại Học Ngoại Ngữ - Đại Học Quốc Gia Hà Nội , Giám đốc Global Education - Anh Phạm Văn Bình đã chính thức là diễn giả tại sự kiện cùng sinh viên trường đại học Ngoại Ngữ",
  },
]);
</script>

<style scoped lang="scss"></style>
