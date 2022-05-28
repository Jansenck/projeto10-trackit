import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import BigLogo from "./BigLogo";
import UserContext from './contexts/UserContext';

export default function SingUp(){

    const {userData, setUserData} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function postUserData(event){

        event.preventDefault();
        
        setUserData({...userData, email, name, image, password});

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: name,
            image: image,
            password: password
        });
        promisse.then((res) => console.log(res.data));
        promisse.catch(() => console.log('Deu ruim aqui'));
    }

    return(
        <>
            <BigLogo/>
            <Container>
                <form onSubmit={postUserData}>
                    <input type="email" required placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" required placeholder="senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" required placeholder="nome"  value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="url" required placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)}/>
                    <Button type="submit">
                        <Link to="/" style={linkStyle}>
                            <p>Cadastrar</p>
                        </Link>
                    </Button>
                </form>
            </Container>
            <Link to="/" style={linkStyle}>
                {"Já tem uma conta? Faça login!"}
            </Link>
        </>
    );
}

const Container = styled.div`
    height: 34vh;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8%;

`;

const Form = styled.form`
    height: 79%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        input{
            height: 20.5%;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-size: 20px;
            color:#DBDBDB;
        }
`;

const Button = styled.button`
    height: 6vh;
    width: 80vw;
    background-color: #52B6FF;
    font-size: 20px;
    color: #FFFFFF;
`;

const linkStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#FFFFFF'
}