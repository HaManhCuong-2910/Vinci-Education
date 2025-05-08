<template>
  <client-only>
    <el-select
      :model-value="props.value"
      :class="['select-common-container', props.class]"
      :popper-class="props.popperClass"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :multiple="props.multiple"
      :collapse-tags="props.collapseTags"
      :collapse-tags-tooltip="props.collapseTagsTooltip"
      :clearable="props.clearable"
      :loading="props.loading"
      :filterable="props.filterable"
      :allow-create="props.allowCreate"
      @change="handleUpdate"
      @visible-change="onVisibleChange"
    >
      <slot name="header"> </slot>
      <el-option
        v-for="item in props.listOption"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
      <template v-if="slots.label" #label="{ value, label }">
        <slot name="label" v-bind="{ value, label }" />
      </template>
      <template v-if="slots.tag" #tag>
        <slot name="tag" />
      </template>
    </el-select>
  </client-only>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { IChooseOption } from "~/src/services/constant";
const props = defineProps({
  value: [String, Number, Array],
  class: String,
  popperClass: String,
  placeholder: String,
  disabled: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  multiple: Boolean,
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  loading: Boolean,
  clearable: {
    type: Boolean,
    default: true,
  },
  listOption: Array as PropType<IChooseOption[]>,
});

const slots = useSlots();
const emit = defineEmits(["update:value", "visibleChange"]);

const handleUpdate = (value: string | number | string[] | number[]) => {
  emit("update:value", value);
};

const onVisibleChange = (visible: boolean) => {
  emit("visibleChange", visible);
};
</script>

<style scoped lang="scss">
.select-common-container {
  width: 100%;

  &.is-error {
    :deep(.el-select__wrapper),
    :deep(.el-input__wrapper) {
      border: 1px solid #ef4e52;
      box-shadow: 0px 0px 0px 1px #f9bdbe;
    }
  }
  :deep(.el-select__wrapper),
  :deep(.el-input__wrapper) {
    border: 1px solid #e8e8e8;
    box-shadow: unset;
    border-radius: 12px;
    padding: 8px 16px;
    min-height: 38px;
    line-height: 20px;

    .el-select__placeholder {
      span {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  :deep(.el-select__selection) {
    .el-select__input-wrapper {
      .el-select__input {
        height: 20px;
      }
    }
  }
}

.loading-icon {
  img {
    width: 24px;
    height: 24px;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    animation: loadingAnimated linear 2.3s infinite;
  }
}

@keyframes loadingAnimated {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
