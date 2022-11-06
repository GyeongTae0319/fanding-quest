<script setup lang="ts">
import { Todo, useTodoStore } from "~/stores/todo";

export interface Props {
  item: Todo;
}

const { deleteTodo } = useTodoStore();

const props = defineProps<Props>();
const { item } = toRefs(props);

const styles = computed(() => ({
  "--color": item.value.color,
}));
</script>

<template>
  <div class="item" :style="styles">
    <span class="item__name">{{ item.name }}</span>
    <Button class="item__delete" @click="deleteTodo(item.id)">
      <Icon name="octicon:trash-16" />
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.item {
  @include font-normal;

  cursor: pointer;

  display: flex;
  align-items: center;
  height: 40px;

  &:not(:last-child) {
    border-bottom: 1px solid $color-border-muted;
  }
  &:hover {
    background-color: rgba(255 255 255 / 0.05);
  }

  &::before {
    content: "";

    display: block;

    width: 8px;
    height: 8px;
    margin: 0 16px;

    border-radius: 4px;
    background-color: var(--color);
  }

  &__name {
    flex: 1 1 0;
    width: 0;
  }
  &__delete {
    margin-right: 4px;
    padding: 8px;
  }
}
</style>
