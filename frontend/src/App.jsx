import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topusers from './component/Topusers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topusers/>
    </>
  )
}

export default App
