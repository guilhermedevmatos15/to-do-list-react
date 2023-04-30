import React from 'react';

// * Components

// * CSS
import './Form.css';

// * Images

// * Icons


const Form = props => {
   return (
      <form className='Form'>
         <input 
            type="text" 
            required
            minLength={3}
            maxLength={50} 
            placeholder='What is the task today?' 
         />
         <button 
            className='b-add' 
            type='submit'
            onClick={e => {e.preventDefault()}}
         >
            Add Task
         </button>
      </form>
   );
}

export default Form;