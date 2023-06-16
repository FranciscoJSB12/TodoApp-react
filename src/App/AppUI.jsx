import { useContext } from 'react';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/';
import { TodoItem } from '../TodoItem/';
import { CreateTodoButton } from '../CreateTodoButton/';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoAlertCreate } from '../TodoAlertCreate';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';


function AppUI () {
    const {
      loading,
      error,
      searchedTodos,
      handleComplete,
      handleDelete,
      openModal,
      setOpenModal
      } = useContext(TodoContext);
    return (
    <>
      <TodoCounter/>
      
      <TodoSearch/>
      
     
      <TodoList>
        { loading && <TodoLoading/>}

        { error && <TodoError/>}
        
        { (!error && !loading && searchedTodos.length === 0) && <TodoAlertCreate/>}
        
        {!error && searchedTodos.map(
            todo => <TodoItem 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {handleComplete(todo.text)}} 
            onDelete={() => {handleDelete(todo.text)}}
            key={todo.text}/>
            )}
      </TodoList>
      
      <CreateTodoButton setOpenModal = {setOpenModal}/>
      
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
    );
}

export { AppUI }