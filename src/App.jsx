import Person from './components/Person'
import { useState } from 'react'
import './App.css'

function App() {
  //let name = "Lulamile"
  const [name, setName] = useState('Lulamile');
  return (
    <div className='container'>
      <div className='App'>
        {/*<input type="text" onChange={(e) => {setName(e.target.value)}}/>*/}
        <Person name={name} role="Student"/>
        <Person name="Benni"/>
        <Person/>
        <Person name="Benni"/>
        <Person/>
        <Person/>
      </div>
        <>
          <button className='add-new-employee'>+ New Person</button>
        </>
    </div>
  )
}

export default App
