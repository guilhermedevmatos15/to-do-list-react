import React from 'react';

// * Components
import TodoList from '../../components/TodoList/TodoList';

// * CSS
import './Home.css';

// * Images

// * Icons


const Home = props => {
   return (
      <div className='Home'>
         <TodoList />
      </div>
   );
}

export default Home;