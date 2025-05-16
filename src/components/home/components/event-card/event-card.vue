<template>
  <div class="flex space-x-5 group cursor-pointer">
    <div
      class="relative w-[108px] aspect-[108/83] shrink-0 border-2 border-white rounded-xl overflow-hidden group-hover:scale-105 duration-300 ease-in-out box-shadow"
    >
      <div>
        <img
          :src="props.data?.thumbnail"
          alt="tin tuc"
          class="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
    <div>
      <p class="text-primary text-lg font-bold">{{ props.data?.title }}</p>
      <a
        href="/"
        class="line-clamp-3 text-black-300 font-medium group-hover:underline"
      >
        {{ props.data?.description }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  data: Object as PropType<{
    thumbnail: string;
    title: string;
    description: string;
  }>,
});
</script>

<style scoped lang="scss">
.box-shadow {
  box-shadow: rgba(27, 43, 67, 0.1) 0px 8px 20px 0px,
    rgba(27, 43, 67, 0.1) 0px 3px 6px 0px, rgba(27, 43, 67, 0.1) 0px 0px 1px 0px;
}
</style>
