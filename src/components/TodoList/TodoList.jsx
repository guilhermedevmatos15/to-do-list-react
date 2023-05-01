import React, { useState } from 'react';

// * Components
import Form from '../Form/Form';
import Todos from '../Todos/Todos';

// * CSS
import './TodoList.css'

// * Images

// * Icons


const TodoList = props => {

   const [inputValue, setInputValue] = useState('');
   const [todos, setTodos] = useState([{ id: 0, todoName: 'first task', completed: false }]);

   function inputEmpty() {
      if (inputValue === '' || inputValue === undefined || inputValue === null) {
         return true;
      }
      return false;
   }

   function handleClick() {
      if (!(inputEmpty())) {
         setTodos([...todos, { id: todos.length, todoName: inputValue, completed: false }]);
      }
   }

   function deleteTask(id) {
      setTodos(todos.filter(todo => {
         return todo.id !== id;
      }));
   }

   function completedTask(id) {
      setTodos(todos.map(todo => {
         return todo.id === id ? { id: todo.id, todoName: todo.todoName, completed: !(todo.completed) } : { id: todo.id, todoName: todo.todoName, completed: todo.completed };
      }));
   }

   return (
      <div className='TodoList'>
         <h1>Get Things Done!</h1>
         <Form setInputValue={setInputValue} handleClick={handleClick} />
         <Todos todos={todos} deleteTask={deleteTask} completedTask={completedTask} />
      </div>
   );
}

export default TodoList;