import { CiCircleRemove } from 'react-icons/ci';
import './TodoError.css'

function TodoError () {
    return (
        <li className='TodoError'>
            <span><CiCircleRemove color='red' className='TodoError-icon'/></span>
            <p>Something went wrong!</p>
            <span><CiCircleRemove color='red' className='TodoError-icon'/></span>
        </li>
    );
}

export { TodoError };