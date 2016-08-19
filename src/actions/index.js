import {dispatch} from "../store";
import {CHOOSE_TODO} from "../constants";

export const bindedChooseTodo = (id) => dispatch(chooseTodo(id));

export function chooseTodo(id) {
  return (dispatch, getState) => {
    const {todos} = getState();

    const todo = todos.find((todo) => todo.id === id);
    dispatch({type: CHOOSE_TODO, todo});
  };
}
