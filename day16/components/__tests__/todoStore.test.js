import { useTodoStore } from '../todoStore';

// Reset store before each test (Zustand stores are singletons, so we need to reset)
beforeEach(() => {
  useTodoStore.setState({ todos: [] });
});

describe('todoStore', () => {
  it('adds a todo', () => {
    useTodoStore.getState().addTodo('Learn testing');
    const todos = useTodoStore.getState().todos;
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe('Learn testing');
    expect(todos[0].completed).toBe(false);
  });

  it('toggles a todo', () => {
    useTodoStore.getState().addTodo('Test');
    const id = useTodoStore.getState().todos[0].id;
    useTodoStore.getState().toggleTodo(id);
    expect(useTodoStore.getState().todos[0].completed).toBe(true);
  });

  it('deletes a todo', () => {
    useTodoStore.getState().addTodo('Delete me');
    const id = useTodoStore.getState().todos[0].id;
    useTodoStore.getState().deleteTodo(id);
    expect(useTodoStore.getState().todos).toHaveLength(0);
  });
});