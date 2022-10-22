<script setup lang="ts">
export interface Props {
  title: string;
  items: { to: string; label: string; icon: string }[];
}

const props = defineProps<Props>();
const { title, items } = toRefs(props);
</script>

<template>
  <div class="section">
    <div class="section__title">{{ title }}</div>
    <ul>
      <li v-for="{ to, label, icon } in items" :key="label">
        <Button
          size-effect="week"
          class="section__item"
          @click="navigateTo(to)"
        >
          <Icon :name="icon" />
          {{ label }}
        </Button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding: 8px;

  &__title {
    @include font-x-small;
    padding: 4px 8px;
    color: $color-fg-muted;
  }
  &__item {
    gap: 8px;
    width: 100%;
    padding: 4px 8px;
  }
}
</style>
