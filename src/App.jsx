import Person from './components/Person'
const name = "Lulamile"
function App() {
  return (
    <div className='App'>
      {name==="Lulamile"?
      <>
        <Person/>
        <h1>Hello {name}</h1>
      </>
      :
        <h1>No person</h1>
    }
    </div>
  )
}

export default App
