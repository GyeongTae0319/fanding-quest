<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoStore } from "~/stores/todo";

const { todo } = storeToRefs(useTodoStore());
</script>

<template>
  <div class="list">
    <ListItem v-for="[id, item] in todo" :key="id" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  overflow: hidden;

  border: 1px solid $color-border-default;
  border-radius: 12px;
  background-color: $color-bg-default;
}
</style>
