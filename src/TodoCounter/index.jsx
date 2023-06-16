import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter () {
    const { completedTodos, totalTodos } = useContext(TodoContext);
    
    let title;
    if(completedTodos === totalTodos && totalTodos > 0) {
        title = <h1 className='TodoCounter'>You've completed all your tasks! 🎉🎉</h1>
    } else {
        title = <h1 className="TodoCounter">You've completed {completedTodos} out of {totalTodos} 😅</h1> 
    }
    return (
        <>
            {title}
        </>
    );
}

export { TodoCounter };