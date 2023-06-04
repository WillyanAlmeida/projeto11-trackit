import styled from "styled-components"

import logo from '../../assets/logo.png'
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";


export default function HomePage() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate()

    function loginpost(e) {

        e.preventDefault();
       

        const cadastro = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: email,
            password: password
        })
        cadastro.then((x) => {
            setUser(x.data)
            navigate('/habitos')
        })

        cadastro.catch(erro => {
            alert(erro.response.data.message);
            
        });
    }

    return (
        <PageContainer>
            <img src={logo}></img>
            <FormContainer onSubmit={loginpost} >

                <input data-test="email-input" id="email" required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />

                <input data-test="password-input" id="password" required type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />

                <button data-test="login-btn" type="submit">Entrar</button>
                
                <Link to={`/cadastro`}>
                <p> Não tem uma conta? Cadastre-se! </p>
                
                </Link>
            </FormContainer>


        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    justify-content: center;
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
    width: calc(100vw - 60px); 
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
        &:hover{
            cursor: pointer;
        }
    }
`