<template>
  <header
    class="box-shadow-header fixed top-0 left-0 right-0 w-full bg-white z-[1000]"
  >
    <nav class="container mx-auto grid grid-cols-5 gap-4 items-center lg:pt-1">
      <img
        src="/images/logo.jpg"
        alt="logo"
        class="lg:w-[120px] min-w-[80px]"
      />
      <div class="h-full flex items-center justify-end col-span-4">
        <div class="mr-4 hidden lg:block">
          <ul class="flex space-x-4">
            <li>
              <a href="#ve-chung-toi" class="hover:text-primary duration-100"
                >Về chúng tôi</a
              >
            </li>
            <li>
              <a
                href="#bang-vang-thanh-tich"
                class="hover:text-primary duration-100"
                >Bảng vàng thành tích</a
              >
            </li>
            <li>
              <a href="#cam-ket" class="hover:text-primary duration-100"
                >Cam kết</a
              >
            </li>
            <li>
              <a
                href="#lo-trinh-luyen-thi"
                class="hover:text-primary duration-100"
                >Lộ trình luyện thi</a
              >
            </li>
            <li>
              <a href="#hinh-thuc-hoc" class="hover:text-primary duration-100"
                >Hình thức học</a
              >
            </li>
          </ul>
        </div>
        <button-common
          :text="$t('tu_van_mien_phi')"
          :class-text="'font-medium'"
          @click="isShowAdviseDialog = true"
        ></button-common>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useAdviseStore } from "../../home/store/dialog-advise.store";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);
</script>

<style scoped lang="scss">
.box-shadow-header {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 8px 24px 0px;
}
</style>
