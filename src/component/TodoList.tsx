import React from 'react';
import { ITodo } from '../interfaces';
import { TodoForm } from './TodoForm';

type TodoListProps = {
  todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => {
        const classes=['todo']
        if (todo.complited) {
          classes.push('complited')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.complited} />
              <span>{todo.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}