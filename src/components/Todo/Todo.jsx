import React from 'react';

// * Components

// * CSS
import './Todo.css';

// * Images

// * Icons
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Todo = props => {
   return (
      <div className='Todo'>
         <CheckBoxIcon className='iconChecked' />
         <CheckBoxOutlineBlankIcon className='iconNoChecked' />

         <p className='todoName'>{props.todoName ? props.todoName : 'Default todo'}</p>
         <DeleteIcon />
      </div>
   );
}

export default Todo;