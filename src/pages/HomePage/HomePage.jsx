import styled from "styled-components"

import logo from '../../assets/logo.png'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function HomePage() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')

    // useEffect(() => {
    //     const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

    //     requisicao.then(resposta => {
    //         setMovies(resposta.data);
    //         });
    // }, []);

    return (
        <PageContainer>
            <img src={logo}></img>
            <FormContainer >

                <input data-test="email-input" id="email" required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />

                <input data-test="password-input" id="password" required placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />

                <button data-test="login-btn" type="submit">Entrar</button>

                <p> Não tem uma conta? Cadastre-se! </p>
            </FormContainer>


        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
    img{
        width: 180px;
        height: 180px;
    }
`
const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
    margin-bottom: 10px;
    font-size: 18px;
    button {
        margin-bottom: 10px;
        width: calc(100vw - 60px);
        align-self: center;
        background-color: #52B6FF;
    }
    input {
        width: calc(100vw - 60px);
    }
    p{
        margin-top: 10px;
        color: #52B6FF;
        font-size: 14px;
    }
`