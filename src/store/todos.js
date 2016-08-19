import * as constants from "../constants";

let counter = 1;

function Todo({name, checked}) {
  return {
    id: counter++,
    name: name || "No name",
    checked: checked || false,
  };
}

const todoList = [
  Todo({name: "first", checked: true}),
  Todo({name: "second", checked: true}),
  Todo({name: "third", checked: false}),
];

export function todos(state = todoList, action) {
  switch (action.type) {
    case constants.CREATE_TODO:
      return [...state, Todo(action.todo)];
    case constants.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case constants.CHECK_TODO:
      return state.map((todo) => todo.id !== action.id ? todo : {...todo, checked: true});
    default:
      return state;
  }
}

const badTodo = {
  id: 0,
  name: "Something goes wrond =(",
  checked: true,
};

export function currentTodo(state = badTodo, action) {
  switch (action.type) {
    case constants.CHOOSE_TODO:
      return action.todo;
    default:
      return state;
  }
}
