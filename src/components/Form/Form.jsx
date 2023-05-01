import React from 'react';

// * Components

// * CSS
import './Form.css';

// * Images

// * Icons

const Form = (props) => {
   const { setInputValue, handleClick } = props;

   return (
      <form
         className="Form"
         onSubmit={(e) => {
            e.preventDefault();
            handleClick();
         }}
      >
         <input
            type="text"
            required
            minLength={3}
            maxLength={50}
            placeholder="What is the task today?"
            onChange={(e) => {
               setInputValue(e.target.value);
            }}
         />
         <button className="b-add" type="submit">
            Add Task
         </button>
      </form>
   );
};

export default Form;
