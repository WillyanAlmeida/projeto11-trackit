import styled from "styled-components"
import logo from '../../assets/logo.png'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SingUp() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [picture, setPicture] = useState('')
    let [btstats, setBtstats] = useState(false)
    const navigate = useNavigate()

    function sendpost(e) {

        e.preventDefault();
        setBtstats(true);

        const cadastro = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: name,
            image: picture,
            password: password
        })
        cadastro.then(() => {            
            navigate("/")
            setBtstats(false)
        })

        cadastro.catch(erro => {
            alert(erro.response.data.message);
            setBtstats(false)
        });
    }

    return (
        <PageContainer>
            <img src={logo}></img>
            <FormContainer btstats={btstats} onSubmit={sendpost}>

                <input disabled={btstats} data-test="email-input" id="email" required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />

                <input disabled={btstats} data-test="password-input" id="password" required type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />

                <input disabled={btstats} data-test="user-name-input" id="name" required type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />

                <input disabled={btstats} data-test="user-image-input" id="picture" required type="url" placeholder="foto" value={picture} onChange={e => setPicture(e.target.value)} />

                <button disabled={btstats}  data-test="signup-btn" type="submit">Cadastrar</button>

            </FormContainer>
            <Link data-test="login-link" to={`/`}>
                <p> Já tem uma conta? Faça login! </p>
            </Link>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    p{
        margin-top: 10px;
        color: #52B6FF;
        font-size: 14px;
    }
`
const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0 10px 0;
    margin-bottom: 10px;
    font-size: 18px;
    button {
        margin-bottom: 10px;
        width: calc(100vw - 60px);        
        background-color: ${btstats => btstats.btstats ? 'gray' : '#52B6FF'};
    }
    input {       
        width: calc(100vw - 60px);
    }
   `
