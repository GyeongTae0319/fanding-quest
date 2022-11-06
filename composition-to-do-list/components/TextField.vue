<script setup lang="ts">
export interface Props {
  modelValue: string;
}

const props = defineProps<Props>();
const modelValue = useVModel(props);
const input = ref<HTMLInputElement | null>(null);

onMounted(() => {
  syncInput();
});
watch(modelValue, syncInput);

function syncInput() {
  const el = input.value;
  const value = modelValue.value;
  if (!el || el.value === value) return;
  el.value = value;
}

function handleInput() {
  modelValue.value = input.value?.value || "";
}
</script>

<template>
  <input type="text" ref="input" class="text-field" @input="handleInput" />
</template>

<style lang="scss" scoped>
.text-field {
  @include font-small;

  padding: 5px 12px;

  border: 1px solid $color-border-muted;
  border-radius: 6px;
  background-color: $color-bg-inset;

  color: $color-fg-default;

  transition-property: border-color, background-color;
  transition-duration: 0.1s;

  &:hover {
    border-color: $color-border-default;
  }
  &:focus {
    border-color: $color-blue-3;
    background-color: $color-bg-default;
  }
}
</style>
