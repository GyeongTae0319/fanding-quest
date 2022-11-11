import { formatISO } from "date-fns";
import { defineStore } from "pinia";

export type Color = string;
export type State = "backlog" | "doing" | "done";

export interface Todo {
  id: string;
  name: string;
  color: Color;
  state: State;
  createdAt: string;
  startAt?: string;
  endAt?: string;
}

export const useTodoStore = defineStore("todo", () => {
  const { appId } = useApp();
  const storageKey = `${appId}[todo]` as const;

  const todo = ref(new Map<string, Todo>());

  function addTodo(name: string, color: Color) {
    const item: Todo = {
      name,
      color,
      id: useUuid(),
      state: "backlog",
      createdAt: formatISO(new Date()),
    };
    todo.value.set(item.id, item);
  }
  function deleteTodo(id: string) {
    todo.value.delete(id);
  }

  let isMounted = false;
  onMounted(() => {
    isMounted = true;
    syncTodo();
  });
  watch(todo, syncStorage, { deep: true });

  function syncTodo() {
    if (!isMounted) return;
    const item = localStorage.getItem(storageKey);
    try {
      if (!item) throw null;
      todo.value = new Map(JSON.parse(item));
    } catch (e) {
      localStorage.setItem(storageKey, "[]");
    }
  }
  function syncStorage() {
    if (!isMounted) return;
    const entries = Array.from(todo.value.entries());
    localStorage.setItem(storageKey, JSON.stringify(entries));
  }

  return { todo, addTodo, deleteTodo };
});
