<script setup lang="ts">
useHead({
  title: "설정",
});
</script>

<template>
  <div class="page">
    <h1 class="page__title">설정</h1>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 24px;

  background-color: $color-bg-inset;

  &__title {
    @include font-h1;
  }
}
</style>
