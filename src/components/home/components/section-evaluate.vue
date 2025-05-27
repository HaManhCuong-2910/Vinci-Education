<template>
  <section class="lg:py-28 py-20">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <h3
          class="lg:text-4xl text-3xl lg:text-left text-center font-bold text-black-400 mt-2"
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
        <evaluate-card
          v-for="(item, index) in dataEvaluate"
          :key="index"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dataEvaluate = ref([
  {
    avatar: "/images/hoc-vien-noi-gi.jpg",
    fb: "/images/hoc-vien-noi-gi.jpg",
    name: "Nguyễn Thị Lại",
    description:
      "Tôi là phụ huynh của cháu Đức Thắng học viên thầy Bình bên Global Education điều đầu tiên phải thật sự cảm phục tâm huyết thầy vì con tôi ham chơi và nghịch cũng nhất quyết không chịu học nhờ sự tân tâm của thầy mà con đã đỗ Đại Học Thương Mại nhà tôi biết ơn thầy Bình",
  },
  {
    avatar: "/images/hoc-vien-noi-gi.jpg",
    fb: "/images/hoc-vien-noi-gi.jpg",
    name: "Hoàng Bích Diệp",
    description:
      "Thật sự may mắn vì mình biết đến thầy Bình sau đó mới biết đến Global Education trung tâm mình ưng nhất tài liệu vô cùng chất lượng , giảng viên dạy nhiệt tình nữa nói chung là 100 điểm , em đỗ FTU rồi nè thích học FTU vì trường giống thầy",
  },
  {
    avatar: "/images/hoc-vien-noi-gi.jpg",
    fb: "/images/hoc-vien-noi-gi.jpg",
    name: "Trần Hoàng Thiên",
    description:
      "Biết thầy Bình qua tiktok hay xem thầy live nên sau đó mới đăng kí học thật sự quá chất lượng uy tín 10 đỉm. Em k kì vọng quá nhiều dù k đỗ được ngành mong muốn nhưng vẫn đỗ được Bách Khoa là mãn nguyện rồi . Còn được thầy đưa đi chơi Escape sướng ghê",
  },
  {
    avatar: "/images/hoc-vien-noi-gi.jpg",
    fb: "/images/hoc-vien-noi-gi.jpg",
    name: "Lưu Thị Lệ Hằng",
    description:
      "Thầy Bình thì bản thân mình tiếp xúc lúc chốt học bên thầy thôi thì thấy nhiệt tình được cam kết đầu ra cũng yên tâm sau thấy bé nhà mình Ánh chăm chỉ học hẳn xưa lười suốt ngày chỉ thích đi chụp ảnh trang điểm thôi . Thấy chăm chỉ là thấy cũng yên tâm rồi con đỗ nguyện vọng 1 ngành marketing của Kinh tế quốc dân thích lắm còn được thầy mời hai mẹ con đi tham quan trường",
  },
  {
    avatar: "/images/hoc-vien-noi-gi.jpg",
    fb: "/images/hoc-vien-noi-gi.jpg",
    name: "Trần Quốc Khánh",
    description:
      "Em thấy tài liệu học bên trung tâm sịn nhất là anh trợ giảng 1-1 giảng bài bản còn gọi điện giảng bài đoạn em không hiểu luôn mê quá mê . Ngoài giờ học thầy còn được trợ giảng chăm sóc nên cũng trộm vía có thể flex giờ tôi là Tân sinh viên ngành Quan hệ Quốc Tế - Học Viện Ngoại Giao . Mãi đỉnh ạ thầy Bình",
  },
]);
</script>

<style scoped lang="scss"></style>
