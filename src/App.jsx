import Person from './components/Person'
import { useState } from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

function App() {
  //let name = "Lulamile"
  const [name, setName] = useState('Lulamile');
  const [persons, setPersons] = useState([

  {
    id: 1,
    name: "Lulamile",
    role: "Student",
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: 2,
    name: "Lulamile",
    role: "Intern",
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?'
  },
  {
    id: 3,
    name: "Lulamile",
    role: "Software Dev",
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?'
  },
  {
    id: 4,
    name: "Lulamile",
    role: "",
    img: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?'
  },
  {
    id: 5,
    name: "Lulamile",
    role: "Lecture",
    img: 'https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?'
  },
  {
    id: 6,
    name: "Lulamile",
    role: "Postgraduate",
    img: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?'
  },
  
  ])
  function updatePerson(id, newName, newRole){
    const updatedPersons = persons.map((person) =>  {
      if (id==person.id){
          return {...person, name: newName, role: newRole}
      }
      return person
    })
    setPersons(updatedPersons)
  }

  return (
    <div className='App'>
      <div className='flex flex-wrap'>
        {/*<input type="text" onChange={(e) => {setName(e.target.value)}}/>*/}
        {/*<Person name={name} role="Student"/>
        <Person name="Benni"/>
        <Person/>
        <Person name="Benni"/>
        <Person/>
        <Person/>*/}
        {persons.map((person) => {
          return(
            <Person 
              key={person.id}
              id={person.id} 
              name={person.name} 
              role={person.role} 
              img={person.img} 
              alt='person image'
              updatePerson={updatePerson}
            />
          );
        })}
      </div>
        <>
          <button className='object-center border-1 border-gray-400'>+ New Person</button>
        </>
    </div>
  )
}

export default App
