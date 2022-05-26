import {useState} from 'react';
import styled from 'styled-components';

import Header from "./Header";
import CreateHabits from './CreateHabits';
import Footer from "./Footer";

export default function Habits(){

    const [thereIsHabits, setThereIsHabits] = useState(false);

    return(
        <>
            <Header/>
            <MyHabits>
                <p>Meus hábitos</p>
                <button>+</button>
            </MyHabits>
            <CreateHabits/>
            <Footer/>
        </>
    );
}

const MyHabits = styled.div`
    height: 10vh;
    width: 100vw;

    margin-top: 12vh;
    padding: 10px 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

        button{
            height: 40px;
            width: 40px;
        }
`;