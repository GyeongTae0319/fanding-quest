<script setup lang="ts">
export interface Emits {
  (e: "close"): void;
}

const emit = defineEmits<Emits>();
</script>

<template>
  <div class="header">
    <span class="header__title">할 일 추가</span>
    <Button class="header__close" @click="emit('close')">
      <Icon name="octicon:x-16" />
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include font-h4;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  border-bottom: 1px solid $color-border-default;
  background-color: $color-bg-overlay;

  color: $color-fg-emphasis;

  &__title {
    padding: 0 8px;
  }
  &__close {
    padding: 0.8rem;
    font-size: 1.6rem;
  }
}
</style>
