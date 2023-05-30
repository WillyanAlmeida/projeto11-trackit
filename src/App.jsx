import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useState } from "react"

export default function App() {

    // axios.defaults.headers.common['Authorization'] = 'LYBJtjK2liCOeAleBGOoZq8T';

    return (
        <>
            <BrowserRouter>
                {/* <NavContainer >CINEFLEX</NavContainer> */}
                <Routes>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/cadastro' element={<SeatsPage />} />
                    <Route path='/habitos' element={<SessionsPage />} />
                    <Route path='/hoje' element={<SuccessPage />}/>
                    <Route path='/historico' element={<SuccessPage />}/>

                </Routes>

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