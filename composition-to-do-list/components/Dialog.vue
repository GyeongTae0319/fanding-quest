<script setup lang="ts">
const dialog = ref<HTMLDialogElement | null>(null);
const closing = ref(false);

function show() {
  dialog.value?.showModal();
}

function close() {
  const el = dialog.value;
  if (!el) return;
  el.addEventListener("animationend", handleCloseAnimationEnd);
  closing.value = true;
}
function handleCloseAnimationEnd(event: AnimationEvent) {
  const el = event.target as HTMLDialogElement;
  el.removeEventListener("animationend", handleCloseAnimationEnd);
  el.close();
  closing.value = false;
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    event.preventDefault();
    close();
  }
}

defineExpose({
  show,
  close,
});
</script>

<template>
  <dialog
    ref="dialog"
    class="dialog"
    :data-closing="closing"
    @keydown="handleKeyDown">
    <slot />
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  margin: auto;

  border: 1px solid $color-border-default;
  border-radius: 6px;
  background-color: $color-bg-default;

  color: $color-fg-default;

  &[open] {
    animation: show-scale 0.25s ease normal, show-opacity 0.25s ease normal;

    &::backdrop {
      animation: show-opacity 0.25s ease normal;
    }
  }
  &[data-closing="true"] {
    animation: close-scale 0.25s ease normal, close-opacity 0.25s ease normal;

    &::backdrop {
      animation: close-opacity 0.25s ease normal;
    }
  }

  &::backdrop {
    background-color: rgb(1, 4, 9, 0.75);
  }
}

@keyframes show-scale {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
}
@keyframes show-opacity {
  from {
    opacity: 0;
  }
}

@keyframes close-scale {
  to {
    opacity: 0;
    transform: scale(1.05);
  }
}
@keyframes close-opacity {
  to {
    opacity: 0;
  }
}
</style>
