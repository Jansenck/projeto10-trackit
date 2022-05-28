import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BigLogo from "./BigLogo";

export default function SingIn(){

    const[loginEmail, setLoginEmail] = useState('');
    const[loginPassword, setLoginPassword] = useState('');

    function postLoginData(event){

        event.preventDefault();

        const body = {
            email: loginEmail,
            password: loginPassword
        }

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);

        promisse.then((res) => console.log(res.data.token));
        promisse.catch(() => {})
    }

    return(
        <>
            <BigLogo/>
            <Container>
                <Form onSubmit={postLoginData}>
                    <input type="email" required placeholder="email"  value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
                    <input type="password" required placeholder="senha"  value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>    
                    <Button type="submit">
                        <Link to="/hoje" style={linkStyle}>
                            <p>Entrar</p>
                        </Link>
                    </Button>
                </Form>
            </Container>
            <Link to="/cadastro" style={{color: '#52B6FF'}}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </>
    );
}

const Container = styled.div`
    height: 20vh;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8%;

`;

const Form = styled.form`
    height: 65%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        input{
            height: 42%;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-size: 20px;
            color:#DBDBDB;
        }
        p{
            height: 100%;
            width: 100%;
            border-radius: 5px;
        }
`;

const Button = styled.button`
    height: 6vh;
    width: 80vw;
    background-color: #52B6FF;
`;

const linkStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#FFFFFF'
}