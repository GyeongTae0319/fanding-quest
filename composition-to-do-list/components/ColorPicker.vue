<script setup lang="ts">
export interface Props {
  modelValue: string;
}

const props = defineProps<Props>();
const modelValue = useVModel(props);

const palette = <const>[
  "primary",
  "blue",
  "green",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "coral",
  "gray",
];
const paletteColorMap = <const>{
  blue: "#58a6ff",
  coral: "#f78166",
  gray: "#6e7681",
  green: "#3fb950",
  orange: "#f0883e",
  pink: "#f778ba",
  primary: "#7a86ed",
  purple: "#bc8cff",
  red: "#f85149",
  yellow: "#e3b341",
};

function setColor(value: string) {
  modelValue.value = value;
}
</script>

<template>
  <div class="color-picker">
    <div class="color-picker__palette">
      <button
        v-for="color in palette"
        :key="color"
        class="color-picker__palette__color"
        :style="{ '--color': paletteColorMap[color] }"
        @click="setColor(paletteColorMap[color])">
        <Icon
          v-show="modelValue === paletteColorMap[color]"
          name="octicon:check-16" />
      </button>
    </div>
    <div class="color-picker__pick" :style="{ '--color': modelValue }" />
  </div>
</template>

<style lang="scss" scoped>
.color-picker {
  display: flex;
  gap: 8px;

  &__palette {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 8px;

    flex: 1 1 0;
    width: 0;

    &__color {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 6px;
      background-color: var(--color);

      font-size: 2.4rem;
      color: $color-fg-emphasis;
    }
  }
  &__pick {
    width: 104px;
    height: 104px;

    border: 1px solid $color-border-muted;
    border-radius: 6px;
    background-color: var(--color);
  }
}
</style>
