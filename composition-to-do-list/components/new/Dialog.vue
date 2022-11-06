<script setup lang="ts">
import { Dialog } from "#components";
import { useTodoStore } from "~/stores/todo";

const { addTodo } = useTodoStore();

const name = ref("");
const color = ref("");

function submit() {
  if (!name.value) return;
  addTodo(name.value, color.value);
  reset();
  close();
}
function reset() {
  name.value = "";
  color.value = "";
}

const dialog = ref<InstanceType<typeof Dialog> | null>(null);
function show() {
  reset();
  dialog.value?.show();
}
function close() {
  dialog.value?.close();
}
defineExpose({
  show,
  close,
});
</script>

<template>
  <Dialog ref="dialog" class="dialog">
    <NewDialogHeader @close="close()" />
    <div class="dialog__body">
      <label for="new:name" class="dialog__label">내용</label>
      <TextField v-model="name" id="new:name" />
      <ColorPicker v-model="color" class="dialog__input" />
      <Button class="dialog__submit" @click="submit()">
        <Icon name="octicon:plus-16" />
        추가하기
      </Button>
    </div>
  </Dialog>
</template>

<style lang="scss" scoped>
.dialog {
  width: 420px;

  &__body {
    display: flex;
    flex-direction: column;

    padding: 16px;
  }
  &__label {
    @include font-small-bold;

    cursor: pointer;

    align-self: flex-start;
    margin-bottom: 0.8rem;

    color: $color-fg-emphasis;
  }
  &__input {
    margin-top: 1.6rem;
  }
  &__submit {
    align-self: flex-end;
    gap: 8px;

    margin-top: 2.4rem;
    padding: 8px 16px 8px 12px;
  }
}
</style>
