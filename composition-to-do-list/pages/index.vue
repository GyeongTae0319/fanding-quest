<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoStore } from "~/stores/todo";

const { todo } = storeToRefs(useTodoStore());

useHead({
  title: "목록 보기",
});
</script>

<template>
  <div class="page">
    <h1 class="page__title">목록 보기</h1>
    <List />
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 24px;
  background-color: $color-bg-inset;

  &__title {
    @include font-h1;
    margin-bottom: 0.5em;
  }
}
</style>
