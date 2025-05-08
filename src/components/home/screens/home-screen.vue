<template>
  <div>
    <section-intro-home />
    <section-list-study-education />
    <section-news />
    <section-table-achievement />
    <section-commit-output />
    <section-roadmap-exam />
    <client-only>
      <section-teacher />
      <section-teacher-second />
    </client-only>
    <section-difference-value />
    <section-platform />
    <section-evaluate />
    <section-event />
    <section-register />
  </div>
</template>

<script setup lang="ts">
import { updateSeoMeta } from "~/src/services/constant";

updateSeoMeta(
  "Trung tâm luyện thi IELTS TOP 1 TP HCM - Vinci Education",
  "DOL English IELTS Đình Lực cung cấp các khoá học IELTS với hệ phương pháp Linearthinking, đội ngũ giáo viên tận tâm và nền tảng công nghệ độc quyền. Đảm bảo đầu ra và trung bình giúp học viên tăng 1.0 đến 1.5 band sau 2 tháng.",
  "",
  "/images/anh-chu-dao.jpg"
);
</script>

<style scoped lang="scss"></style>
