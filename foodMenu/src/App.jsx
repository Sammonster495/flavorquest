import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './components/Home/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          {/* <Route exact path="/:target" element={<Redirect/>}></Route> */}
          <Route exact path="/menu" element={<Menu/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
