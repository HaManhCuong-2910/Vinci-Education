<template>
  <div
    class="bg-[#FDF6F6] border border-[#EDB3B3] rounded-2xl p-10 conatiner-card lg:h-[400px] h-[473px] flex flex-col overflow-hidden"
  >
    <div class="max-w-[312px]">
      <p class="text-2xl font-bold text-black-400">
        Tư liệu học tập độc quyền chỉ có tại Global Education
      </p>
      <p class="text-base mt-2 text-black-300">
        Tất cả sách đều do Global Education tự lên nội dung và thiết kế theo tư
        duy riêng.
      </p>
    </div>
    <div class="relative custom-flex">
      <div class="book-1 book">
        <img src="/images/cer-thay-binh-2.jpg" />
      </div>
      <div class="book-2 book">
        <img src="/images/cer-thay-binh.jpg" />
      </div>
      <div class="book-3 book">
        <img src="/images/cer-thay-binh.jpg" />
      </div>
      <div class="book-4 book">
        <img src="/images/cer-thay-binh-3.jpg" />
      </div>
      <div class="book book-5">
        <img src="/images/cer-thay-binh.jpg" />
      </div>
      <div class="book book-7">
        <img src="/images/cer-thay-binh.jpg" />
      </div>
      <div class="book book-6">
        <img src="/images/cer-thay-binh.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.custom-flex {
  flex: 1 1 0%;
}
.conatiner-card {
  &:hover {
    .book-1 {
      left: 9%;
      bottom: -36%;
      transform: rotateZ(-4.43deg);
      opacity: 0.5;
    }
    .book-2 {
      left: 5%;
      bottom: -46%;
      transform: rotateZ(-5.8deg);
      z-index: 2;
    }
    .book-3 {
      left: 33%;
      bottom: -36%;
      transform: rotateZ(-0.28deg);
      opacity: 0.5;
    }
    .book-4 {
      left: 58%;
      bottom: -47%;
      transform: rotateZ(7.55deg);
      opacity: 0.5;
    }
    .book-5 {
      left: 12%;
      bottom: -29%;
      transform: rotateZ(2.54deg);
      z-index: 5;
    }
    .book-7 {
      left: 55%;
      bottom: -6%;
      transform: rotateZ(3.42deg);
      z-index: 6;
    }
    .book-6 {
      left: 31%;
      bottom: -41%;
      transform: rotateZ(-5.17deg);
      z-index: 7;
    }
  }
}

.book {
  border-radius: 4px 10px 10px 4px;
  overflow: hidden;
  position: absolute;
  width: 177px;
  transition: 400ms;
  z-index: 1;
  box-shadow: rgba(209, 66, 66, 0.05) 0px 12px 32px 12px,
    rgba(33, 38, 45, 0.1) 0px 16px 20px 0px,
    rgba(209, 66, 66, 0.05) 0px -8.11px 24.33px 0px, rgba(209, 66, 66, 0.1);
}

.book-5 {
  left: 7%;
  bottom: -136%;
  transform: rotateZ(5.65deg);
}
.book-7 {
  left: 55%;
  bottom: -140%;
  transform: rotateZ(-5.87deg);
  z-index: 6;
}
.book-6 {
  left: 31%;
  bottom: -167%;
  transform: rotateZ(-11.28deg);
  z-index: 7;
}

.book-1 {
  left: 9%;
  bottom: -120%;
  transform: rotateZ(-6.77deg);
}

.book-2 {
  left: 7%;
  bottom: -120%;
  transform: rotateZ(3.14deg);
}
.book-3 {
  left: 33%;
  bottom: -90%;
  transform: rotateZ(1.97deg);
}
.book-4 {
  left: 58%;
  bottom: -80%;
  transform: rotateZ(3.71deg);
}
</style>
