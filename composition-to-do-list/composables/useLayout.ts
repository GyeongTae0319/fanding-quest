export function useLayout() {
  const layoutMargin = useState("app:layoutMargin", getDefaultMargin);
  const pageMargin = useState("app:pageMargin", getDefaultMargin);

  const layoutMarginStyleVariables = computed(() => {
    return marginToCssVariables("layout", layoutMargin.value);
  });
  const pageMarginStyleVariables = computed(() => {
    return marginToCssVariables("page", pageMargin.value);
  });

  return {
    layoutMargin,
    pageMargin,
    layoutMarginStyleVariables,
    pageMarginStyleVariables,
  };
}

type Margin = { top: number; right: number; bottom: number; left: number };

function getDefaultMargin(): Margin {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function marginToCssVariables<P extends string>(prefix: P, margin: Margin) {
  return Object.entries(margin).reduce((acc, [key, value]) => {
    return { ...acc, [`--${prefix}-margin-${key}`]: `${value}px` };
  }, {}) as Record<`--${P}-margin-${keyof Margin}`, string>;
}
