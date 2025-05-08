<template>
  <span
    :class="[props.color, props.class]"
    :style="props.colorHex && `background-color: ${props.colorHex}`"
  ></span>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
  class: String,
  colorHex: String,
});
</script>

<style scoped lang="scss">
span {
  display: block;
  min-width: 12px;
  min-height: 12px;
  max-width: 12px;
  max-height: 12px;
  border-radius: 50%;
}
</style>
