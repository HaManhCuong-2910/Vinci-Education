<template>
  <div :class="props.class">
    <label :class="[props.required && 'required', 'text-sm']">{{
      props.label
    }}</label>
    <div :class="props.label && 'mt-1'">
      <select-common
        :list-option="props.listOption"
        :value="props.value"
        :disabled="props.disabled"
        :clearable="props.clearable"
        :placeholder="props.placeholder"
        :filterable="props.filterable"
        :multiple="props.multiple"
        :loading="props.loading"
        :collapse-tags="props.collapseTags"
        :max-collapse-tags="props.maxCollapseTags"
        :class="errorMessage && meta.touched ? 'is-error' : ''"
        :popper-class="props.popperClass"
        @update:value="onUpdate"
        @visible-change="(visible: boolean) => emit('visibleChange', visible)"
      >
        <template #header>
          <slot name="header"></slot>
        </template>
      </select-common>
    </div>
    <VErrorMessage
      v-if="meta.touched && !isHiddenLabel"
      :name="props.name"
      :class="'error-message text-sm text-red-500'"
    />
  </div>
</template>

<script setup lang="ts">
import type { IChooseOption } from "~/src/services/constant";

const props = defineProps({
  label: String,
  value: [String, Number, Array],
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  filterable: Boolean,
  multiple: Boolean,
  collapseTags: Boolean,
  maxCollapseTags: Number,
  class: String,
  popperClass: String,
  loading: Boolean,
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  listOption: {
    type: Array as PropType<IChooseOption[]>,
    required: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  isHiddenLabel: {
    type: Boolean,
    default: false,
  },
});

const { meta, errorMessage, setTouched, setValue, validate } = useField(
  props.name,
  undefined,
  {
    initialValue: props.value,
    valueProp: props.value,
  }
);

const emit = defineEmits(["update:value", "onChoose", "visibleChange"]);

const onUpdate = async (value: string | number) => {
  emit("update:value", value);
  emit("onChoose", value);
  setValue(value);
  await validate();
  setTouched(true);
};
</script>

<style scoped lang="scss">
.error-message {
  margin-top: 4px;
  display: block;
}
</style>
