import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

import './TodoSearch.css';

function TodoSearch () {
    const { searchValue, setSearchValue} = useContext(TodoContext);

    return (
        <input 
            type="text" 
            placeholder="Search tasks"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };