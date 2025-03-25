import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ServiceCard from './components/ServiceCard'
// import './App.css'

function App() {

  return (
    <>
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"20px"
    }}>
      <ServiceCard title="Web Development" description="Makes Web pages and websites like Youtube.com"/>
      <ServiceCard title="App Development" description="Makes Apps like Instagram"/>
    </div>
    </>
  )
}

export default App
