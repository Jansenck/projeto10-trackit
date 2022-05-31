import { useContext, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import HabitsContext from './contexts/HabitsContext';

export default function Habit(){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    
    const {habits, setHabits} = useContext(HabitsContext)
    
    const serializedUsedData = localStorage.getItem("localUserData");
    const localUserData = JSON.parse(serializedUsedData);
    
    const selectedDay = habits.days;

    const config = {
        headers: {
            Authorization: `Bearer ${localUserData.token}`
        }
    }
    
    useEffect(()=>{

        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
    
        promisse.then((response) => {
            setHabits(response.data);
            
        });
        promisse.catch(() => window.alert("deu ruim..."));

    },[]);

    return (
        
        habits.map((habit, id)=>{
            <SessionHabit key={id}>
                <h1>habit.name</h1>
                <Days key={id}>
                    {habit.days.map((day, index) => <RenderDays day={day} key={index}/>)}
                </Days>
            </SessionHabit>
        })
        
    )
}

function RenderDays(day, index, selectedDay, habit){

    console.log(habit)
    
    return (
        <Day
            key={index}
            color={(selectedDay === (day)? "#D5D5D5" : "#FFFFFF")}
            background={(selectedDay ===(day)? "#FFFFFF" : "#D5D5D5")}>
            {day}
        </Day>
    )
}

const SessionHabit = styled.div`
    height: 20vh;
    width: 100%;
    background-color: #ffffff;

    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;

    margin-bottom: 10px;
`;

const Days = styled.div`
    width: 75%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: purple;
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.background};
    color: ${props => props.color};
`;