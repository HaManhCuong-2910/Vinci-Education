<template>
  <div
    class="relative group flex-col flex gap-4 p-6 border border-[#E3E7ED] bg-[#F9FAFB] group-hover:border-[#A1ADB9] rounded-3xl transition-[border-color] duration-300"
    style="opacity: 1; transform: none"
  >
    <svg
      width="30"
      height="19"
      viewBox="0 0 30 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute -left-[1px] -top-[3px] fill-[#D2D8DF] group-hover:fill-[#434E5B] transition-[fill] duration-300"
    >
      <path
        d="M7.9887 0.0609218C8.36846 -0.0993424 8.80221 0.0677357 8.99618 0.431436L9.82295 1.98161C10.0585 2.42325 9.8464 2.96626 9.39945 3.19157C8.57237 3.6085 7.95599 4.12121 7.55034 4.7297C7.08054 5.53507 6.84564 5.93775 6.84564 5.93775C6.84564 5.93775 7.18121 6.00486 7.85235 6.1391C8.52349 6.20621 9.26175 6.44111 10.0671 6.84379C10.9396 7.24647 11.7114 7.88406 12.3826 8.75654C13.0537 9.56191 13.3893 10.7029 13.3893 12.1794C13.3893 14.0586 12.7181 15.6693 11.3758 17.0116C10.1007 18.2867 8.55705 18.8908 6.74497 18.8237C4.86577 18.7565 3.25503 18.0183 1.91275 16.6089C0.637584 15.1324 0 13.3539 0 11.2733C0 8.65587 0.805369 6.34044 2.41611 4.32701C3.88365 2.43143 5.74118 1.0094 7.9887 0.0609218ZM24.5994 0.0609218C24.9792 -0.0993425 25.413 0.0677357 25.6069 0.431436L26.4337 1.98161C26.6692 2.42325 26.4571 2.96626 26.0102 3.19157C25.1831 3.6085 24.5667 4.12121 24.1611 4.7297C23.6913 5.53507 23.4564 5.93775 23.4564 5.93775C23.4564 5.93775 23.7919 6.00486 24.4631 6.1391C25.1342 6.20621 25.8725 6.44111 26.6779 6.84379C27.5503 7.24647 28.3221 7.88406 28.9933 8.75654C29.6644 9.56191 30 10.7029 30 12.1794C30 14.0586 29.3289 15.6693 27.9866 17.0116C26.7114 18.2867 25.1678 18.8908 23.3557 18.8237C21.4765 18.7565 19.8658 18.0183 18.5235 16.6089C17.2483 15.1324 16.6107 13.3539 16.6107 11.2733C16.6107 8.65587 17.4161 6.34044 19.0268 4.32701C20.4944 2.43143 22.3519 1.0094 24.5994 0.0609218Z"
        fill="inherit"
      ></path>
    </svg>
    <div class="flex items-center gap-5">
      <div class="flex items-center gap-4 w-full max-w-[calc(100%_-_64px)]">
        <div class="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
          <div>
            <img
              :src="props.data?.avatar"
              loading="lazy"
              alt="avatar"
              class="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
        <div class="grid gap-[2px]">
          <p class="font-semibold text-black-400">{{ props.data?.name }}</p>
          <p class="text-black-300 text-sm">Tháng 01, 2025</p>
        </div>
      </div>
      <div class="absolute top-6 right-6 w-16 aspect-[64/46] z-[1]">
        <div
          class="absolute -top-[4px] -right-[4px] z-[2] bg-[#F9FAFB] rounded-full w-6 h-6 flex justify-center items-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10.7392C20 5.18059 15.5206 0.677246 10 0.677246C4.47563 0.677246 0 5.18059 0 10.7392C0 15.7601 3.65562 19.9232 8.4375 20.6772V13.6483H5.89813V10.7398H8.4375V8.52179C8.4375 6.00064 9.92813 4.60832 12.2131 4.60832C13.3075 4.60832 14.4531 4.80453 14.4531 4.80453V7.2804H13.19C11.95 7.2804 11.5625 8.05705 11.5625 8.85258V10.7392H14.3356L13.89 13.6477H11.5625V20.6766C16.3406 19.9226 20 15.7595 20 10.7386V10.7392Z"
              fill="#2B52D4"
            ></path>
          </svg>
        </div>
        <div>
          <img
            :src="props.data?.fb"
            loading="lazy"
            alt="feedback"
            class="absolute top-0 right-0 w-full h-full border border-[#E3E7ED] rounded-md"
          />
        </div>
      </div>
    </div>
    <p class="text-[#313A44] line-clamp-5">
      {{ props.data?.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  data: Object as PropType<{
    avatar: string;
    fb: string;
    name: string;
    description: string;
  }>,
});
</script>

<style scoped lang="scss">
.bg {
  background: radial-gradient(
    100% 211.87% at 100% 100%,
    rgb(249, 250, 252) 47.71%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
