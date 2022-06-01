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
import HabitsContext from './contexts/HabitsContext'

export default function App(){

    const [userData, setUserData] = useState({});
    const[token, setToken] = useState(null);
    const [habits, setHabits] = useState([]);
    const [habitsToday, setHabitsToday] = useState([]);
    const [habitsConcluded, setHabitsConcluded] = useState([]);
    const [progress, setProgress] = useState(0);

    

    return(

        <Container>
            <BrowserRouter>
                <GlobalStyle/>
                <HabitsContext.Provider 
                    value={{habits, setHabits,habitsToday, setHabitsToday, progress, setProgress, habitsConcluded, setHabitsConcluded}}>
                    <UserContext.Provider value={{userData, setUserData, token, setToken}}>
                        <Routes>
                            <Route path={"/"} element={<SingIn/>}/>
                            <Route path={"/cadastro"} element={<SingUp/>}/>
                            <Route path={"/habitos"} element={<Habits/>}/>
                            <Route path={"/hoje"} element={<Today/>}/>
                            <Route path={"/historico"} element={<History/>}/>
                        </Routes>
                    </UserContext.Provider>
                </HabitsContext.Provider>  
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
    margin-bottom: 15vh;

`;