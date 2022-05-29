import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';

import BigLogo from "./BigLogo";
import UserContext from './contexts/UserContext';

export default function SingIn(){

    let navigate = useNavigate();

    const {userData, setUserData} = useContext(UserContext);
    const {token, setToken} = useContext(UserContext);


    const[loginEmail, setLoginEmail] = useState('');
    const[loginPassword, setLoginPassword] = useState('');

    const[buttonContent, setButtonContent] = useState("Entrar");
    const [nextPage, setNextPage] = useState("");


    function postLoginData(event){
        
        event.preventDefault();

        {(token)?

            <p>Entrar</p>
        :
            setButtonContent(<ThreeDots color="#FFFFFF" height={80} width={80} />)
        }


        const body = {
            email: loginEmail,
            password: loginPassword
        }

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);

        promisse.then((res) => {
            
            setToken(res.data.token)

            const {id, name, image, email, token} = res.data;
            const localData = {id, name, image, email, token}

            const serializeUserData = JSON.stringify(localData);
            localStorage.setItem('localUserData', serializeUserData);

            navigate('/hoje')
            
        });
        promisse.catch(

        )

    }

    return(
        <>
            <BigLogo/>
            <Container>
                <Form onSubmit={postLoginData}>
                    <input type="email" placeholder="email"  value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required/>
                    <input type="password" placeholder="senha"  value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required/>    
                    <Button type="submit" style={linkStyle}>
                            {buttonContent}
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

            //PARA DESABILITAR OS INPUTS
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
    display:flex;
    justify-content: center;
    align-items: center;
    //PARA DESABILITAR O BOTÃO
`;

const linkStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#FFFFFF'
}