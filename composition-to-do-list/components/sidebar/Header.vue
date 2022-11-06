<script setup lang="ts">
const userName = "Blro";
</script>

<template>
  <div class="header">
    <Button class="header__name">
      {{ userName }}
      <Icon name="octicon:pencil-16" />
    </Button>
    <Button class="header__button">
      <Icon name="octicon:sidebar-expand-16" />
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include font-emphasized;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  border-bottom: 1px solid $color-border-muted;
  background-color: $color-bg-overlay;

  color: $color-fg-emphasis;

  &__name {
    gap: 8px;
    padding: 4px 8px;

    > .icon {
      opacity: 0;

      transition: opacity 0.075s;
    }
    &:hover > .icon,
    &:focus-visible > .icon {
      opacity: 1;
    }
  }
  &__button {
    padding: 8px;

    font-size: 16px;
    color: $color-fg-default;
  }
}
</style>
