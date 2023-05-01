import React, { useState } from 'react';

// * Components
import Todo from '../Todo/Todo';

// * CSS
import './Todos.css';

// * Images

// * Icons


const Todos = props => {

   const { todos, deleteTask, completedTask } = props;

   function renderTodos(todos) {
      return todos.map((todo, index) => {
         return <Todo todoName={todo.todoName} completed={todo.completed} key={todo.id} id={todo.id} deleteTask={deleteTask} completedTask={completedTask} />
      });
   }

   return (
      <div className='Todos'>
         {renderTodos(todos)}
      </div>
   );
}

export default Todos;