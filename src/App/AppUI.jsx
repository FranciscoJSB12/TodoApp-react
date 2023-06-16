import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/';
import { TodoItem } from '../TodoItem/';
import { CreateTodoButton } from '../CreateTodoButton/';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoAlertCreate } from '../TodoAlertCreate';
import { TodoContext } from '../TodoContext';


function AppUI () {
    return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
        { ({
            loading,
            error,
            searchedTodos,
            handleComplete,
            handleDelete
            }) => (  
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
        </TodoList>)}
      </TodoContext.Consumer>
      <CreateTodoButton/>
    </>
    );
}

export { AppUI }