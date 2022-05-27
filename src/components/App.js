import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import SingIn from './SingIn';
import SingUp from './SingUp';
import Habits from './Habits';
import Today from './Today';
import History from './History';

import UserContext from './contexts/UserContext';

export default function App(){

    const [habits, setHabits] = useState([]);

    return(

        <Container>
            <BrowserRouter>
                <GlobalStyle/>
                <UserContext.Provider value={{habits, setHabits}}>
                    <Routes>
                        <Route path={"/"} element={<SingIn/>}/>
                        <Route path={"/cadastro"} element={<SingUp/>}/>
                        <Route path={"/habitos"} element={<Habits/>}/>
                        <Route path={"/hoje"} element={<Today/>}/>
                        <Route path={"/historico"} element={<History/>}/>
                    </Routes>
                </UserContext.Provider>   
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    width: 90vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;