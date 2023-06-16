import './CreateTodoButton.css'

function CreateTodoButton ({ setOpenModal }) {
    return (
        <div className='CreateTodoButton-container'>
            <button 
            className='CreateTodoButton'
            onClick={() => {setOpenModal(state => ! state);}}
            >Add Task</button>
        </div>
    );
}

export { CreateTodoButton };