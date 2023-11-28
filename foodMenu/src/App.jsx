import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import Menu from "./components/Menu/Menu";

function App() {
  const [data, setData] = useState([]);
  
  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:8080/menu/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Resolved Response from Spring Boot:", responseData);
        setData(responseData);
      } else {
        console.error("Failed to fetch data from Spring Boot");
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  };
  
  

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
