// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4 rounded-xl text-black' >programmingBeast</h1>
      <Card username="programmingBeast" btnText="click Here"/>

    </>
  )
}

export default App
