import Person from './components/Person'
import { useState } from 'react'

function App() {
  //let name = "Lulamile"
  const [name, setName] = useState('Lulamile');
  return (
    <div className='App'>
      <input type="text" onChange={(e) => {setName(e.target.value)}}/>
      <Person name={name} role="Student"/>
      <Person name="Benni"/>
      <Person/>
    </div>
  )
}

export default App
