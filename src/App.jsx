import Person from './components/Person'
import { useState } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid'

function App() {
  //let name = "Lulamile"
  const [name, setName] = useState('Lulamile');
  const [persons, setPersons] = useState([

  {
    name: "Lulamile",
    role: "Student",
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    name: "Lulamile",
    role: "Intern",
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?'
  },
  {
    name: "Lulamile",
    role: "Software Dev",
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?'
  },
  {
    name: "Lulamile",
    role: "",
    img: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?'
  },
  {
    name: "Lulamile",
    role: "Lecture",
    img: 'https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?'
  },
  {
    name: "Lulamile",
    role: "Postgraduate",
    img: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?'
  },
  
  ])

  return (
    <div className='container'>
      <div className='App'>
        {/*<input type="text" onChange={(e) => {setName(e.target.value)}}/>*/}
        {/*<Person name={name} role="Student"/>
        <Person name="Benni"/>
        <Person/>
        <Person name="Benni"/>
        <Person/>
        <Person/>*/}
        {persons.map((person) => {
          console.log(person)
          return(<Person key={uuidv4()} name={person.name} role={person.role} img={person.img} alt='person image'/>);})}
      </div>
        <>
          <button className='add-new-employee'>+ New Person</button>
        </>
    </div>
  )
}

export default App
