<script setup lang="ts">
export interface Props {
  sizeEffect?: "week" | "normal" | "dynamic";
}

const props = withDefaults(defineProps<Props>(), {
  sizeEffect: "normal",
});
const { sizeEffect } = toRefs(props);
</script>

<template>
  <button class="button" :data-size-effect="sizeEffect">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  --size-effect: 0.95;

  display: inline-flex;
  align-items: center;

  border-radius: 8px;

  transition-property: background-color, transform;
  transition-duration: 0.075s;

  &[data-size-effect="week"] {
    --size-effect: 0.985;
  }
  &[data-size-effect="dynamic"] {
    --size-effect: 0.9;
  }

  &:hover,
  &:focus-visible {
    background-color: $color-bg-hover;
  }
  &:active {
    background-color: $color-bg-press;
    transform: scale(var(--size-effect));
  }
}
</style>
