<template>
  <header
    class="box-shadow-header fixed top-0 left-0 right-0 w-full bg-white z-10"
  >
    <nav class="container mx-auto grid grid-cols-2 gap-4 items-center">
      <img src="/images/logo.jpg" alt="logo" class="w-[120px]" />
      <div class="h-full flex items-center justify-end">
        <button-common
          :text="$t('tu_van_mien_phi')"
          :class-text="'font-medium'"
        ></button-common>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box-shadow-header {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 8px 24px 0px;
}
</style>
