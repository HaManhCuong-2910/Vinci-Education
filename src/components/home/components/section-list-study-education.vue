<template>
  <section class="bg-custom">
    <div class="lg:bg-white lg:container lg:mx-auto box-shadow lg:p-9">
      <img
        src="/images/section-2.jpg"
        alt="section"
        class="lg:w-[600px] w-full mx-auto hover:scale-105 duration-300 cursor-pointer"
        @click="isShowAdviseDialog = true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAdviseStore } from "../store/dialog-advise.store";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.bg-custom {
  background: linear-gradient(rgb(255, 249, 241) 0%, rgb(255, 255, 255) 100%);
}

.box-shadow {
  box-shadow: rgba(220, 147, 78, 0) 0px -16px 32px 0px,
    rgba(220, 147, 78, 0.1) 0px -10px 16px 0px;
  border-radius: 32px;
}

@include mediaMobileTabletTo1280 {
  .box-shadow {
    box-shadow: unset;
    border-radius: unset;
  }
}
</style>
