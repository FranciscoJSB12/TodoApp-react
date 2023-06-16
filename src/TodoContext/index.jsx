import { useState } from 'react';
import { createContext } from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider( { children }) {
    
    const {
        item: todos, 
        saveItems: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = useState('');
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      
      const handleComplete = (text) => {
        const newTodos = [...todos];
        const index = todos.findIndex(todo => todo.text === text);
        newTodos[index].completed = true;
        saveTodos(newTodos);
      }
      
      const handleDelete = (text) => {
        const newTodos = [...todos];
        const index = todos.findIndex(todo => todo.text === text);
        newTodos.splice(index,1);
        saveTodos(newTodos);
      }
    
      const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchedText = searchValue.toLowerCase();
        const isTextFound = todoText.includes(searchedText);
        return isTextFound;
      });  
    return (
        <TodoContext.Provider
        value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            handleComplete,
            handleDelete
            }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };