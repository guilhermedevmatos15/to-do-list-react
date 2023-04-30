import React from 'react';

// * Components
import Form from '../Form/Form';
import Todos from '../Todos/Todos';

// * CSS
import './TodoList.css'

// * Images

// * Icons


const TodoList = props => {
   return (
      <div className='TodoList'>
         <h1>Get Things Done!</h1>
         <Form />
         <Todos />
      </div>
   );
}

export default TodoList;