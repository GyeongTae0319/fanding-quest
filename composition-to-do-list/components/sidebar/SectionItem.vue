<script setup lang="ts">
export interface Props {
  icon: string;
  label: string;
  action?: () => void;
  to?: string;
}

const props = defineProps<Props>();
const { icon, label, action, to } = toRefs(props);

function handleClick() {
  if (action?.value) action.value();
  if (to?.value) navigateTo(to.value);
}
</script>

<template>
  <Button size-effect="week" class="section-item" @click="handleClick()">
    <Icon :name="icon" />
    {{ label }}
  </Button>
</template>

<style lang="scss" scoped>
.section-item {
  gap: 8px;
  width: 100%;
  padding: 4px 8px;
}
</style>
