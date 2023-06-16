import { CiCircleCheck, CiCircleRemove, CiCircleAlert} from 'react-icons/ci';
import './TodoItem.css';

function TodoItem ({text, completed, onComplete, onDelete}) {
    return (
        <li className='TodoItem'>
            <span onClick={onComplete}>
            {completed ? <CiCircleCheck color='green' className='TodoItem-icon'/>: 
            <CiCircleAlert color='#F29727' className='TodoItem-icon'/>}
            </span>
            <p>{text}</p>
            <span onClick={onDelete}><CiCircleRemove color='red' className='TodoItem-icon'/></span>
        </li>
    );
}

export { TodoItem };
