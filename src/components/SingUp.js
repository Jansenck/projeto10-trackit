import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BigLogo from "./BigLogo";

export default function SingUp(){

    return(
        <>
            <BigLogo/>
            <Form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
                <input type="text" placeholder="nome"/>
                <input type="url" placeholder="foto"/>
            </Form>
            <Button>{"Cadastrar"}</Button>
            <Link to="/">
                {"Já tem uma conta? Faça login!"}
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