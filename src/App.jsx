import Person from './components/Person'
const name = "Lulamile"
function App() {
  return (
    <div className='App'>
      <Person name={name} role="Student"/>
      <Person name="Benni"/>
      <Person/>
    </div>
  )
}

export default App
