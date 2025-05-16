<template>
  <footer class="bg-[#242938] lg:p-8 py-4 px-0">
    <div class="container mx-auto">
      <img src="/images/logo.jpg" alt="logo" class="w-32 rounded-3xl" />
      <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-20 gap-10 mt-8">
        <div class="col-span-2 lg:col-span-1">
          <on-tab-footer :title="'CƠ SỞ TẠI TPHCM (10)'" :data="dataAddress" />
          <div class="mt-10">
            <on-tab-footer
              :title="'CƠ SỞ TẠI Hà nội (2)'"
              :data="dataAddressHanoi"
            />
          </div>
          <div class="mt-10">
            <on-tab-footer :title="'Thông tin liên hệ'" :data="dataContact" />
          </div>
          <div class="mt-10">
            <p class="text-base font-bold text-white">Theo dõi DOL tại</p>
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
        <div>
          <on-tab-footer :title="'KHÓA HỌC IELTS'" :data="dataTutorial" />
        </div>
        <div>
          <on-tab-footer :title="'KHÓA HỌC Khác'" :data="dataTutorial" />
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
const dataAddress = ref([
  {
    label: "Cơ sở 1:",
    value: "Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 2:",
    value: "302 Nguyễn Văn Đậu, P11, Q.Bình Thạnh, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 3:",
    value: "24A Bàu Cát 2, Tân Bình, P.14, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 1:",
    value: "Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 1:",
    value: "Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 1:",
    value: "Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 1:",
    value: "Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
]);
const dataAddressHanoi = ref([
  {
    label: "Cơ sở 1:",
    value: "Hẻm 458/14, 3 Tháng 2, P12, Q. 10, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
  {
    label: "Cơ sở 2:",
    value: "302 Nguyễn Văn Đậu, P11, Q.Bình Thạnh, TP.HCM",
    url: "https://goo.gl/maps/kHUJQ783tGJhckF66",
  },
]);
const dataContact = ref([
  {
    label: "Inbox:",
    value: "m.me/dolenglish.ieltsdinhluc",
    url: "/",
  },
  {
    label: "Hotline:",
    value: "1800 96 96 39",
    url: "tel:1800 96 96 39",
  },
]);
</script>

<style scoped lang="scss"></style>
