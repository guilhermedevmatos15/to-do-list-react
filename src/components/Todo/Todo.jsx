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

   const { todoName, completed, id, deleteTask, completedTask } = props;

   return (
      <div className={`Todo ${completed ? 'completed' : ''}`} >
         <CheckBoxOutlineBlankIcon className='iconNoChecked' onClick={e => {completedTask(id)}} />
         <CheckBoxIcon className='iconChecked' onClick={e => {completedTask(id)}} />

         <p className='todoName'>{todoName ? todoName : 'Default todo'}</p>
         <DeleteIcon onClick={e => {deleteTask(id)}} />
      </div>
   );
}

export default Todo;