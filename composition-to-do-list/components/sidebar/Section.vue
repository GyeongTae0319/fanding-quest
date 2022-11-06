<script setup lang="ts">
import { Props as ItemProps } from "~/components/sidebar/SectionItem.vue";

export interface Props {
  title: string;
  items: ItemProps[];
}

const props = defineProps<Props>();
const { title, items } = toRefs(props);
</script>

<template>
  <div class="section">
    <div class="section__title">{{ title }}</div>
    <ul>
      <li v-for="item in items" :key="item.label">
        <SidebarSectionItem v-bind="item" />
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
}
</style>
