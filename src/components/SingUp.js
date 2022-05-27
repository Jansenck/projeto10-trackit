import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BigLogo from "./BigLogo";

export default function SingUp(){

    return(
        <>
            <BigLogo/>
            <Container>
                <Form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="senha"/>
                    <input type="text" placeholder="nome"/>
                    <input type="url" placeholder="foto"/>
                </Form>
                <Button>{"Cadastrar"}</Button>
            </Container>
            <Link to="/">
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