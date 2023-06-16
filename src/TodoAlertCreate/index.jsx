import { CiCircleRemove, CiCircleAlert} from 'react-icons/ci';
import './TodoAlertCreate.css'

function TodoAlertCreate () {
    return (
        <li className='TodoAlertCreate'>
            <span>
                <CiCircleAlert color='#F29727' className='TodoAlertCreate-icon'/>
            </span>
            <p>💡📕 Add new tasks ❗❗</p>
            <span>
                <CiCircleAlert color='#F29727' className='TodoAlertCreate-icon'/>
            </span> 
        </li>
    );
}

export { TodoAlertCreate };