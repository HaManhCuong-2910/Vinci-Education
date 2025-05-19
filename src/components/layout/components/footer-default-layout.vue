<template>
  <footer class="bg-[#242938] lg:p-8 py-4 px-0">
    <div class="container mx-auto">
      <img src="/images/logo.jpg" alt="logo" class="w-32 rounded-3xl" />
      <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-20 gap-10 mt-8">
        <div class="col-span-2 lg:col-span-1">
          <on-tab-footer :title="'CƠ SỞ TẠI TPHCM (1)'" :data="dataAddress" />
          <div class="mt-10">
            <on-tab-footer
              :title="'CƠ SỞ TẠI Hà nội (1)'"
              :data="dataAddressHanoi"
            />
          </div>
          <div class="mt-10">
            <on-tab-footer
              :title="'CƠ SỞ Hợp tác (1)'"
              :data="dataAddressContact"
            />
          </div>
          <div class="mt-10">
            <on-tab-footer :title="'Thông tin liên hệ'" :data="dataContact" />
          </div>
          <div class="mt-10">
            <p class="text-base font-bold text-white">
              Theo dõi Global Education tại
            </p>
            <div class="grid grid-cols-7 mt-4">
              <a
                aria-label="facebook-logo"
                href="https://www.facebook.com/dolenglish.ieltsdinhluc"
                rel="nofollow noreferrer"
                target="_blank"
                ><img
                  src="https://asset.dolenglish.vn/MoyR6DTkmemTytLVeyLw"
                  alt="facebook-logo"
                  class="w-10 h-10"
              /></a>
              <a
                aria-label="youtube-logo"
                href="https://www.youtube.com/channel/UCEhPLLt928jxgOGDtyzgV9g"
                rel="nofollow noreferrer"
                target="_blank"
                ><img
                  src="https://asset.dolenglish.vn/se65HzraQDO9pbMKSnP5"
                  alt="youtube-logo"
                  class="w-10 h-10"
              /></a>
              <a
                aria-label="tiktok-logo"
                href="https://www.tiktok.com/@dolenglish"
                rel="nofollow noreferrer"
                target="_blank"
                ><img
                  src="https://asset.dolenglish.vn/evBjkSYMQz26qmwdAMYZ"
                  alt="tiktok-logo"
                  class="w-10 h-10"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const dataTutorial = ref([
  {
    label: "",
    value: "IELTS Intensive 0",
    url: "/",
  },
  {
    label: "",
    value: "IELTS Intensive 1",
    url: "/",
  },
  {
    label: "",
    value: "IELTS Intensive 2",
    url: "/",
  },
  {
    label: "",
    value: "IELTS Intensive 3",
    url: "/",
  },
  {
    label: "",
    value: "IELTS Intensive 4",
    url: "/",
  },
]);

const dataAddressHanoi = ref([
  {
    label: "Cơ sở 1:",
    value: "43/290 kim mã ba đình, HN",
    url: "https://maps.app.goo.gl/3Kj1LK6b4iPiXGXSA",
  },
]);
const dataAddress = ref([
  {
    label: "Cơ sở 1:",
    value: "121 cô bắc cô giang q1",
    url: "https://maps.app.goo.gl/chLRWXMegHFxEfm19",
  },
]);
const dataAddressContact = ref([
  {
    label: "Cơ sở 1:",
    value: "76 trần bá giao ,p5 , hcm",
    url: "https://maps.app.goo.gl/sazxYg6H5Xy9zEBYA",
  },
]);
const dataContact = ref([
  {
    label: "Inbox:",
    value: "Page Trung tâm ôn thi Đại học - Global Education",
    url: "https://www.facebook.com/share/18ktRSYFWr/?mibextid=wwXIfr",
  },
  {
    label: "Hotline:",
    value: "0919108144",
    url: "tel:0919108144",
  },
]);
</script>

<style scoped lang="scss"></style>
