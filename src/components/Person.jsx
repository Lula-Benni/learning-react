import './Person.css'
import image from '../essentials/Vini.jpg';

function Person(props){
    return(
        <div className='card'>
            <img src={image} alt='user image'/>
            <div className='card-text'>
                <h3>{props.name?props.name:"Unkown"}</h3>
                <p>{props.role?props.role:"No role"}</p>
                <button className='editBtn'>Edit</button>
            </div>
        </div>
    )
}

export default Person;