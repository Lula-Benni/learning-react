import './Person.css'
import image from '../essentials/Vini.jpg';
import EditPerson from './EditPerson';

function Person(props){
    return(
        <div className='card'>
            <img className="profile-image" src={props.img} alt='user image'/>
            <div className='card-text'>
                <h3 className='profile-name'>{props.name}</h3>
                <p className='profile-role'>{props.role}</p>
                <EditPerson/>
            </div>
        </div>
    )
}

export default Person;