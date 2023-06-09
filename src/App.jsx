import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import Habits from "./pages/Habits/Habits"
import SingUp from "./pages/SingUp/SingUp"
import NavBar from "./pages/NavBar/NavBar"
import Today from "./pages/Today/Today"
import History from "./pages/History/History"
import Menu from "./pages/Menu/Menu"
import { UserContext } from "./Context"
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"



export default function App() {

  const [user, setUser] = useState('logout')
  let [listhabits, setListhabits] = useState([])
  let [get, setGet] = useState(0)
  let [progressBar, setProgressBar] = useState(0)
  let [listItens, setListItens] = useState([]);
  
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser, listhabits, setListhabits, get, setGet, progressBar, setProgressBar, listItens, setListItens}}>
          {location.pathname != "/" && location.pathname != "/cadastro" && <> <NavBar /> <Menu /></>}
        
        <Routes>
          
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<SingUp />} />
          <Route path='/habitos' element={<Habits />} />
          <Route path='/hoje' element={<Today />} />
          <Route path='/historico' element={<History />} />

        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`