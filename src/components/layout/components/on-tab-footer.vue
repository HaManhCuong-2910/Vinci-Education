<template>
  <div>
    <h4 class="uppercase text-base font-bold text-[#8F92A1]">
      {{ props.title }}
    </h4>
    <span class="w-full h-[1px] bg-[#8F92A1] my-3 block"></span>
    <ul class="flex flex-col space-y-3">
      <li v-for="(item, index) in props.data" :key="index">
        <p class="text-white">
          <b class="text-sm">{{ item.label }}</b>
          <a
            :href="item.url || '/'"
            target="_blank"
            class="hover:text-primary text-sm duration-75"
            :class="!item.label ? 'font-bold' : 'ml-1'"
            >{{ item.value }}</a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  title: String,
  data: Array as PropType<
    {
      label: string;
      value: string;
      url: string;
    }[]
  >,
});
</script>

<style scoped lang="scss"></style>
