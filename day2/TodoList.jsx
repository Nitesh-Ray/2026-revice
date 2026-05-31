function TodoList() {
  const todos = ['Learn React', 'Build a project', 'Get a job'];
  
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;