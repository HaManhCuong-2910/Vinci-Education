<template>
  <div>
    <section-intro-home />
    <client-only>
      <section-list-study-education />
    </client-only>
    <section-news />
    <client-only>
      <section-facilities />
      <section-teacher />
      <section-teacher-second />
    </client-only>
    <section-commit-output />
    <client-only>
      <section-feedback />
    </client-only>
    <section-event />
    <section-difference-value />
    <section-evaluate />
    <section-roadmap-exam />
    <section-3-card />
    <section-bonus />
    <section-platform />
    <client-only>
      <section-class />
    </client-only>
    <client-only>
      <section-table-achievement />
    </client-only>
    <section-register />
  </div>
</template>

<script setup lang="ts">
import { updateSeoMeta } from "~/src/services/constant";

updateSeoMeta(
  "Trung tâm luyện thi Đại học Top 1 - Global Education",
  "Cơ sở vật chất đạt chuẩn quốc tế ISO 41001 tại Global Education .Global Education tọa lạc tại 290 Kim Mã, Quận Ba Đình . Giảng viên tốt nghiệp từ các trường đại học hàng đầu trong và ngoài nước, nhiều thầy cô là tiến sĩ, thạc sĩ đến từ Đại học Quốc gia Hà Nội và các cơ sở giáo dục uy tín",
  "",
  "/images/anh-chu-dao.jpg"
);
</script>

<style scoped lang="scss"></style>
