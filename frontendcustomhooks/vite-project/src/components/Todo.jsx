import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("http://localhost:5000/todos").then((res) => {
        setTodos(res.data);
        setLoading(false);
      });
    }, n * 1000);
    axios.get("http://localhost:5000/todos").then((res) => {
      setTodos(res.data);
      setLoading(false);
    });
    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, loading };
}

function Todo() {
  const { todos, loading } = useTodos(3);
  if (loading) {
    console.log("fucked");

    return <div>loading...</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </div>
  );
}

function Track({ todo }) {
  return (
    <div key={todo.userid}>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.completed}
    </div>
  );
}

export default Todo;
