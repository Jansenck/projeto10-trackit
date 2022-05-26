import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import SingIn from './SingIn';
import SingUp from './SingUp';
import Habits from './Habits';
import Today from './Today';
import History from './History';


export default function App(){

    return(

        <Container>
            <BrowserRouter>
                <GlobalStyle/>
                <Routes>
                    <Route path={"/"} element={<SingIn/>}/>
                    <Route path={"/cadastro"} element={<SingUp/>}/>
                    <Route path={"/habitos"} element={<Habits/>}/>
                    <Route path={"/hoje"} element={<Today/>}/>
                    <Route path={"/historico"} element={<History/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    width: 80vw;

    display: flex;
    flex-direction: column;
    align-items: center;
`;