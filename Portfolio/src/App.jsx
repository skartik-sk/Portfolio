import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

function Container({ children}) {
  return (
    <div className=''>
      {children}
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex flex-col h-screen px-14 bg-Black-primary'>
       <TopNav/>
       <div className='flex-grow'></div>
     {/* <Container children={children}/> */}
     <footer>

<Footer/>
     </footer>
      </div>
      
    </>
  )
}

export default App
