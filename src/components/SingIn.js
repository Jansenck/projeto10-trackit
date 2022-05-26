import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BigLogo from "./BigLogo";

export default function SingIn(){

    return(
        <>
            <BigLogo/>
            <Form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
            </Form>
            <Link to="/habitos">
                <Button>{"Entrar"}</Button>
            </Link>
            <Link to="/cadastro">
                {"Não tem uma conta? Cadastre-se!"}
            </Link>
        </>
    );
}

const Form = styled.form`

    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    height: 5vh;
    width: 100%;
`;