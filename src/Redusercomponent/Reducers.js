import React, { useReducer, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Todo from "./Todo.js";

export const ACTION = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

let reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTION.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTION.DELETE_TODO:
        console.log(action)
      return todos.filter((todo) => todo.id !== action.payload);

    default:
      return todos;
  }
};
console.log()

let newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

export default function Reducers() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ToDos</Form.Label>
          <Form.Control
            placeholder="Enter ToDos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          variant="primary btn-block"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {todos.map((todo) => {
        return <Todo key={todo.id} to={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
