<script setup lang="ts">
import type { NewDialog } from "#components";

const sections = [
  {
    title: "보기 방식",
    items: [
      { to: "/", label: "목록 보기", icon: "octicon:list-unordered-16" },
      { to: "/kanban", label: "칸반 보기", icon: "octicon:project-16" },
      { to: "/card", label: "카드 보기", icon: "octicon:note-16" },
    ],
  },
  {
    title: "관리",
    items: [
      { action: showNewDialog, label: "할 일 추가", icon: "octicon:plus-16" },
      { to: "/settings", label: "설정", icon: "octicon:gear-16" },
    ],
  },
];

const newDialog = ref<InstanceType<typeof NewDialog> | null>(null);
function showNewDialog() {
  newDialog.value?.show();
}
</script>

<template>
  <div class="sidebar">
    <SidebarHeader />
    <nav>
      <SidebarSection
        v-for="{ title, items } in sections"
        :title="title"
        :items="items" />
    </nav>
    <NewDialog ref="newDialog" />
  </div>
</template>

<style lang="scss" scoped></style>
