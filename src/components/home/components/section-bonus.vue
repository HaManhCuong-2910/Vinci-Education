<template>
  <div id="bang-vang-thanh-tich" class="lg:py-24 py-16">
    <div class="container mx-auto">
      <div class="">
        <p class="mt-1 text-xl font-medium text-center">
          🎯 Duy nhất tại Global Education: Trải nghiệm thi thử đại học “thật
          như thi thật” – ngay tại quận Ba Đình phòng thi đầu vào và thi kiểm
          tra chất lượng đầu ra rộng hơn 300m² giữa lòng Hà Nội
        </p>
        <ul>
          <li class="mt-4">
            Lần đầu tiên, một sự kiện giáo dục quốc tế tại thủ đô Hà Nội thiết
            lập khu vực thi thử quy mô lớn, mô phỏng toàn diện môi trường thi
            đại học với tiêu chuẩn chuyên nghiệp và sát thực tế.
          </li>
          <li class="mt-2">Bố trí phòng thi riêng biệt theo từng khối</li>
          <li class="mt-2">Trang bị bàn ghế tiêu chuẩn phòng thi</li>
          <li class="mt-2">
            Có giám thị trông thi nghiêm túc, tuân thủ đúng thời gian và quy tắc
            phòng thi
          </li>
          <li class="mt-2">
            Áp dụng đề thi mô phỏng bám sát cấu trúc đề thật (các khối A, B,
            D...)
          </li>
          <li class="mt-2">
            🎓 Hai hình thức thi trải nghiệm độc quyền chỉ có tại Global
            Education:
          </li>
          <li class="mt-2">
            Phòng thi kiểm tra năng lực đầu vào – giúp thí sinh xác định trình
            độ hiện tại và nhận tư vấn lộ trình cá nhân hóa.
          </li>
          <li class="mt-2">
            Phòng thi thực chiến mô phỏng đề thi đại học – rèn luyện kỹ năng xử
            lý áp lực, chiến thuật làm bài và tâm lý phòng thi.
          </li>
          <li class="mt-2">
            💡 Đây là một hoạt động đột phá, giúp học sinh không chỉ học lý
            thuyết mà còn được “thử lửa” trong bối cảnh thi thật, nâng cao sự tự
            tin và năng lực làm bài.
          </li>
          <li class="mt-2">
            🎤 "Đây là lần đầu em được trải nghiệm một kỳ thi thử mà mọi thứ đều
            chuyên nghiệp như thi thật – từ đề, giám thị cho đến cả áp lực thời
            gian." – Một học sinh tham dự chia sẻ.
          </li>
        </ul>
      </div>

      <div class="mt-10">
        <Swiper
          :modules="modules"
          :autoplay="{ delay: 800 }"
          :spaceBetween="20"
          :breakpoints="{
            '640': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
          :loop="true"
        >
          <SwiperSlide v-for="(item, index) in dataShow" :key="index">
            <div class="relative rounded-3xl aspect-[258/192] overflow-hidden">
              <img :src="item.avatar" alt="thanh-tich" class="w-full h-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const modules = [Autoplay, Navigation];
const dataShow = ref([
  {
    avatar: "/images/co-so-vat-chat-3.jpg",
  },
  {
    avatar: "/images/su-kien.jpg",
  },
]);
</script>

<style scoped lang="scss">
.border-custom {
  border: 1px solid rgb(227, 231, 237);
}
.button-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  padding: 8px;
  background-color: white;
  color: black;
  border: 0px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
}

.watch-result {
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  &:hover {
    &::after {
      // opacity: 1;
      // visibility: visible;
    }

    .button-absolute {
      // opacity: 1;
      // visibility: visible;
    }
  }

  .button-absolute {
    padding: 12px;
    background-color: transparent;
    color: rgb(255, 255, 255);
    border: 0px;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
  }
}
</style>
