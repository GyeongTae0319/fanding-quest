<script setup lang="ts">
import { StyleValue } from "vue";

const { layoutMargin } = useLayout();
layoutMargin.value.left = 300;

const appStyles = computed<StyleValue>(() => {
  const { top, right, bottom, left } = layoutMargin.value;
  return {
    "--layout-margin-top": `${top}px`,
    "--layout-margin-right": `${right}px`,
    "--layout-margin-bottom": `${bottom}px`,
    "--layout-margin-left": `${left}px`,
  };
});

useHead({
  titleTemplate: (title) => {
    return title
      ? `${title} | Composition To-do List`
      : "Composition To-do List";
  },
});
</script>

<template>
  <div id="app" class="app" :style="appStyles">
    <Sidebar class="app__sidebar" />
    <NuxtPage class="app__main" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  padding-left: var(--layout-margin-left);

  &__sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;

    width: 300px;

    border-right: 1px solid $color-border-default;
  }
  > :deep(.app__main) {
    height: 100%;
  }
}
</style>
