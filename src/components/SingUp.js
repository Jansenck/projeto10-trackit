import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';


import BigLogo from "./BigLogo";
import UserContext from './contexts/UserContext';

export default function SingUp(){

    let navigate = useNavigate();

    const {userData, setUserData} = useContext(UserContext);

    const[buttonContent, setButtonContent] = useState("Cadastrar");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [enableButton, setEnableButton] = useState(false);

    function postUserData(event){

        event.preventDefault();

        (enableButton)?

            <p>Cadastrar</p>
        :
            setButtonContent(<ThreeDots color="#FFFFFF" height={80} width={80} />)
        
        
        setUserData({email, name, image, password});
        
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: name,
            image: image,
            password: password
        });
        promisse.then(() => {
            navigate('/')
        });
        promisse.catch(() => setEnableButton(true));
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
                    <Button type="submit" style={linkStyle}>
                
                            {buttonContent}
                    </Button>
                </form>
            </Container>
            <Link to="/" style={{color: '#52B6FF'}}>
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