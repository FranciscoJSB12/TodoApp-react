import { useState, useEffect } from "react";

function useLocalStorage (itemName, initialValue) {
  
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const savedItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!savedItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(savedItem);
          saveItems(parsedItem);
        }
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    },1000);
  }, []);
  
  const saveItems = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }
  
  return {
    item, 
    saveItems,
    loading,
    error
  };
}

export { useLocalStorage };

/* const defaultTodos = [
  {text: 'Brush teeth', completed: false},
  {text: 'Make breakfast', completed: false},
  {text: 'Pratice programming', completed: false},
  {text: 'Practice English', completed: false},
  {text: 'Go to College', completed: false}
];

const unsavedItems = JSON.stringify(defaultTodos);

localStorage.setItem('TODOS_V1',unsavedItems); */