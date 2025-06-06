<template>
  <section id="hinh-thuc-hoc" class="py-28 container mx-auto">
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
      <div>
        <p class="text-lg uppercase text-black-300 relative w-fit pl-2">
          HÌNH THỨC HỌC
          <img
            src="/images/icon-subtitle.png"
            alt="icon"
            class="absolute -top-[8px] -left-2 w-4"
          />
        </p>
        <h3 class="text-4xl text-primary mt-5 font-bold">
          Cơ sở vật chất đạt chuẩn quốc tế ISO 41001 tại Global Education
        </h3>

        <p class="mt-3">
          Tự hào sở hữu hệ thống cơ sở vật chất hiện đại, được xây dựng và vận
          hành theo tiêu chuẩn quản lý cơ sở hạ tầng quốc tế ISO 41001 – tiêu
          chuẩn hàng đầu dành cho các tổ chức giáo dục chất lượng cao.
        </p>
        <ul>
          <li class="mt-3">
            ✅ Phòng học thông minh, trang bị bảng tương tác, máy chiếu chất
            lượng cao
          </li>
          <li class="mt-2">
            ✅ Không gian học tập tối ưu, yên tĩnh, ánh sáng chuẩn, ghế ngồi
            chuẩn công thái học
          </li>
          <li class="mt-2">
            ✅ Hệ thống an toàn – vệ sinh – tiện ích khép kín, mang lại trải
            nghiệm học tập chuẩn quốc tế
          </li>
          <li class="mt-2">
            ✅ Quản lý vận hành chuyên nghiệp, đảm bảo hiệu suất, an toàn và sự
            hài lòng tối đa cho học viên
          </li>
          <li class="mt-2">
            🎯 Chúng tôi tin rằng một môi trường học tập chất lượng chính là nền
            móng vững chắc để học sinh phát huy tối đa năng lực và vươn tới
            thành công!
          </li>
        </ul>
        <h3 class="mt-5 text-2xl text-primary font-bold">
          Vị trí đắc địa – Trung tâm giáo dục giữa lòng thủ đô
        </h3>
        <p class="mt-3">
          Global Education tọa lạc tại 43/290 Kim Mã, Quận Ba Đình, một trong
          những tuyến phố sầm uất và chiến lược bậc nhất Hà Nội.
        </p>
        <p class="mt-3">
          ✨ Liền kề Lotte Tower và Vincom Metropolis, nơi hội tụ tinh hoa giáo
          dục – công nghệ – hiện đại, mang đến không gian học tập đẳng cấp, tiện
          nghi và kết nối thuận tiện từ mọi khu vực trong thành phố.
        </p>
        <p class="mt-3">
          Học tập trong môi trường đạt chuẩn ISO – Vững nền tảng, chắc tương
          lai!
        </p>
        <button-common
          :class="'w-[293px] max-w-full !h-[53px] shadow-btn duration-300 hover:scale-105 !rounded-2xl mt-8'"
          @click="isShowAdviseDialog = true"
        >
          <div class="relative">
            <p class="font-medium text-sm">NHẬN TƯ VẤN KHÓA HỌC</p>
            <div
              class="bg-white w-5 h-5 rounded-full flex justify-center items-center absolute -right-9 top-1/2 -translate-y-1/2"
            >
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="text-primary text-sm"
              />
            </div>
          </div>
        </button-common>
      </div>
      <div class="rounded-xl overflow-hidden">
        <div class="f-carousel" id="myCarousel">
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-1.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-1.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-1.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-2.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-2.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-2.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-3.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-3.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-3.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-4.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-4.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-4.jpg"
            />
          </div>
          <div
            class="f-carousel__slide"
            data-thumb-src="/images/co-so-vat-chat-5.jpg"
            data-fancybox="gallery"
            data-src="/images/co-so-vat-chat-5.jpg"
          >
            <img
              class="h-[360px] object-contain"
              data-lazy-src="/images/co-so-vat-chat-5.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAdviseStore } from "../store/dialog-advise.store";
// @ts-ignore
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

// @ts-ignore
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);

onMounted(() => {
  new Carousel(
    document.getElementById("myCarousel"),
    {
      Dots: false,
      Thumbs: {
        type: "classic",
      },
    },
    {
      Thumbs,
    }
  );

  Fancybox.bind('[data-fancybox="gallery"]', {});
});
</script>

<style scoped lang="scss">
.shadow-btn {
  box-shadow: rgb(104, 104, 104) 0px 15px 20px -15px;
}

:deep(.f-thumbs__track) {
  padding-bottom: 0px !important;
}

:deep(.f-button) {
  color: #fff !important;
}
</style>
