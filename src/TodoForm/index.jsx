import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const { setOpenModal, handleAddTodo } = useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTodo(newTodoValue);
        setOpenModal(false);
    }

    const handleCancel = () => {
        setOpenModal(false);
    }

    const handleChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <form className='TodoForm'
         onSubmit={handleSubmit}>
            <label>Add a new task</label>
            <textarea
                placeholder='Type your tasks here'
                value={newTodoValue}
                onChange={handleChange}
            />
            <button
                className='TodoForm-button--add'
                type='submit'
            >Add</button>
            <button
                className='TodoForm-button--cancel'
                type='button'
                onClick={handleCancel}
            >Cancel</button>
        </form>
    );
}

export { TodoForm };