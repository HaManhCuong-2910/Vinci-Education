<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <el-dialog
    v-model="isShowAdviseDialog"
    align-center
    :width="'500px'"
    :header-class="'!pb-0'"
    :body-class="'!px-5'"
    :lock-scroll="false"
  >
    <div>
      <h3 class="text-3xl font-bold text-center">Tư Vấn Khóa Học</h3>
      <p class="mt-2 text-sm text-black-300 text-center">
        Bạn vui lòng điền thông tin chính xác.
        <br />
        Vinci Education sẽ liên hệ lại ngay trong 24H
      </p>
      <VForm ref="FormRef" as="div" :validation-schema="schemaAdvise()">
        <div class="grid grid-cols-1 gap-4 mt-3">
          <input-common
            id="name"
            v-model:value="data.name"
            name="name"
            :placeholder="'Nhập họ tên'"
            :label="'Họ và tên'"
            required
          />
          <input-common
            id="phoneNumber"
            v-model:value="data.phoneNumber"
            name="phoneNumber"
            :type="'number'"
            :placeholder="'Nhập số điện thoại'"
            :label="'Số điện thoại'"
            required
          />
          <select-option-label-component
            id="time"
            v-model:value="data.time"
            name="time"
            required
            :label="'Khung giờ có thể liên hệ'"
            :list-option="listOption"
            :clearable="false"
            :placeholder="'Chọn'"
          />
          <button-common
            :class="'w-[293px] !h-[53px] shadow-btn duration-300 hover:scale-105 !rounded-2xl mt-6 mx-auto'"
            @click="onSubmit"
          >
            <div class="relative">
              <p class="font-medium text-sm">NHẬN TƯ VẤN KHÓA HỌC</p>
            </div>
          </button-common>
        </div>
      </VForm>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import type { FormContext } from "vee-validate";
import { schemaAdvise } from "./src/components/home/schema/home.schema";
import { useAdviseStore } from "./src/components/home/store/dialog-advise.store";

const adviseStore = useAdviseStore();
const { isShowAdviseDialog } = storeToRefs(adviseStore);
const FormRef = ref<FormContext>();
const data = ref({
  name: "",
  phoneNumber: "",
  time: "",
});

const listOption = ref([
  {
    label: "08h - 12h",
    value: "08h - 12h",
  },
  {
    label: "12h - 14h",
    value: "12h - 14h",
  },
  {
    label: "14h - 16h",
    value: "14h - 16h",
  },
  {
    label: "16h - 18h",
    value: "16h - 18h",
  },
  {
    label: "20h - 21h",
    value: "20h - 21h",
  },
]);

const onSubmit = async () => {
  await FormRef.value?.validate();
  FormRef.value?.setTouched(true);
  const isPass = Object.keys(FormRef.value?.errors as object).length === 0;
  if (!isPass) return;
};
</script>

<style scoped lang="scss">
.shadow-btn {
  box-shadow: rgb(104, 104, 104) 0px 15px 20px -15px;
}
</style>
