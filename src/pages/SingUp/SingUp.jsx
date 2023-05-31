import styled from "styled-components"
import logo from '../../assets/logo.png'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function SingUp(){
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [picture, setPicture] = useState('')
    return (
        <PageContainer>
           <img src={logo}></img>
           <FormContainer >
                
                <input data-test="email-input"  id="email"  required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>

                
                <input data-test="password-input" id="password" required placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />

                <input data-test="user-name-input"  id="name" required placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />

                <input data-test="user-image-input" id="picture" required placeholder="foto" value={picture} onChange={e => setPicture(e.target.value)} />

                <button data-test="signup-btn" type="submit">Cadastrar</button>
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
    margin: 20px 0;
    font-size: 18px;
    button {
        width: calc(100vw - 60px);
        align-self: center;
        background-color: #52B6FF;
    }
    input {
        width: calc(100vw - 60px);
    }
`