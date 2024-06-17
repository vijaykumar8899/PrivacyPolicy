import { useState } from 'react'
import PrivacyPolicy  from './Components/PrivacyPolicy';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    < PrivacyPolicy/>
   </div>
  )
}

export default App
