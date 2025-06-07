<template>
  <section class="lg:py-28 py-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 items-center">
        <h3
          class="lg:text-4xl text-3xl text-center font-bold text-black-400 mt-2"
        >
          🌟 Sự kiện quốc tế độc quyền quy tụ hơn 35,000 khán giả – Hội thảo sự
          kiện Global Education nơi Giám đốc Phạm Văn Bình truyền cảm hứng về
          giáo dục tương lai 🌍
        </h3>
        <div>
          <p class="lg:text-2xl text-base font-medium text-center">
            Với sự góp mặt của hơn 35,000 khán giả toàn cầu, sự kiện đẳng cấp
            Global Education đã trở thành một sân khấu lý tưởng để Giám đốc Phạm
            Văn Bình chia sẻ những góc nhìn đột phá về giáo dục trong kỷ nguyên
            số.
          </p>
          <p class="mt-3 text-center">
            Bằng tinh thần dẫn dắt đổi mới và tư duy khai phóng, Thầy Bình không
            chỉ đại diện cho tiếng nói Việt Nam mà còn truyền cảm hứng mạnh mẽ
            về cách chúng ta chuẩn bị cho thế hệ trẻ bước vào một thế giới nhiều
            biến động, sáng tạo và kết nối.
          </p>
          <ul>
            <li class="mt-4">✅ 35,000+ khán giả toàn cầu</li>
            <li class="mt-2">
              ✅ Hàng trăm lãnh đạo giáo dục và chuyên gia đổi mới
            </li>
            <li class="mt-2">
              ✅ Một tầm nhìn – Một sứ mệnh – Một thế hệ tương lai bền vững
            </li>
            <li class="mt-2">
              "Giáo dục không chỉ là tri thức, mà là nền tảng để con người sống
              tử tế, tự tin và tạo ra giá trị cho cộng đồng." – Phạm Văn Bình
            </li>
            <li class="mt-2">
              Với kinh nghiệm dày dặn và tầm nhìn chiến lược, Thầy Bình chia sẻ
              những sáng kiến tiên phong mà thầy và đội ngũ của mình đã thực
              hiện nhằm nâng tầm chất lượng giáo dục.
            </li>
            <li class="mt-2">
              "Giáo dục không chỉ là truyền đạt kiến thức, mà là đánh thức tiềm
              năng và khơi nguồn đam mê học hỏi suốt đời.” – Phạm Văn Bình
            </li>
          </ul>
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
