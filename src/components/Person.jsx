import EditPerson from './EditPerson';

function Person(props){
    return(
        /**<div className='card'>
            <img className="profile-image" src={props.img} alt='user image'/>
            <div className='card-text'>
                <h3 className='profile-name'>{props.name}</h3>
                <p className='profile-role'>{props.role}</p>
                <EditPerson id={props.id} name={props.name} role={props.role} 
                updatePerson={props.updatePerson}/>
            
            </div>
        </div>*/
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block w-24 h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt='user image'/>
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {props.name}
                </p>
                <p className="text-slate-500 font-medium">
                    {props.role}
                </p>
                </div>
                <EditPerson id={props.id} name={props.name} role={props.role} 
                updatePerson={props.updatePerson}/>
            </div>
        </div>
    )
}

export default Person;