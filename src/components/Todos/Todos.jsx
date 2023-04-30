import React from 'react';

// * Components
import Todo from '../Todo/Todo';

// * CSS
import './Todos.css';

// * Images

// * Icons


const Todos = props => {
   return (
      <div className='Todos'>
         <Todo />
         <Todo />
      </div>
   );
}

export default Todos;