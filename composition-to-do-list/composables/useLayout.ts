export function useLayout() {
  const layoutMargin = useState("app:layoutMargin", getDefaultMargin);
  const pageMargin = useState("app:pageMargin", getDefaultMargin);

  return { layoutMargin, pageMargin };
}

type Margin = { top: number; right: number; bottom: number; left: number };

function getDefaultMargin(): Margin {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
