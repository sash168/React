import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Indigo')

  return (
    <div style={{width:"180vh", height:"70vh", backgroundColor:color}}>
      <button onClick={()=>setColor('red')} style={{margin:'8px', border:'2px solid white' , backgroundColor:'red'}}>Red</button>
      <button onClick={()=>setColor('green')} style={{margin:'8px' , border:'2px solid white' , backgroundColor:'green'}}>Green</button>
      <button onClick={()=>setColor('blue')} style={{margin:'8px' , border:'2px solid white' , backgroundColor:'pink'}}>Pink</button>
      <button onClick={()=>setColor('pink')} style={{margin:'8px' , border:'2px solid white' , backgroundColor:'blue'}}>Blue</button>
      <button onClick={()=>setColor('orange')} style={{margin:'8px' , border:'2px solid white' , backgroundColor:'orange'}}>Orange</button>
    </div>
  )
}

export default App
