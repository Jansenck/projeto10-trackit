import { useContext, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import HabitsContext from './contexts/HabitsContext';

import trash from '../image/trash.png';

export default function Habit() {
    
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    const { habits, setHabits } = useContext(HabitsContext)

    const serializedUsedData = localStorage.getItem("localUserData");
    const localUserData = JSON.parse(serializedUsedData);

    const config = {
        headers: {
            Authorization: `Bearer ${localUserData.token}`
        }
    }

    useEffect(() => {

        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        promisse.then((response) => {
            setHabits(response.data);
           
        });
        promisse.catch(() => window.alert("deu ruim..."));
        // eslint-disable-next-line 
    }, []);



    function deleteHabit(habitId){

        const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,{

            headers:{"Authorization": `Bearer ${localUserData.token}`}

        });

        promisse.then(
            () => {
                const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

                promisse.then((response) => {
                    
                    setHabits(response.data);
                
                });
                promisse.catch(() => window.alert("deu ruim..."));
            }
        );

    }

    return (
        // eslint-disable-next-line 
        habits.map((habit, id) => {

            return (
                <SessionHabit key={id}>
                    <HabitName>
                        <h1>{habit.name}</h1>
                        <Trash onClick={()=> deleteHabit(habit.id)}>
                            <img src={trash} alt="trash"/>
                        </Trash>
                    </HabitName>
                    

                    <Days key={id}>
                        {
                            days.map((day, index) => {

                                return (
                                    renderDays(day, index, habit.days)
                                )
                            })
                        }
                    </Days>
                </SessionHabit>
            )
        })

    )
}

function renderDays(day, index, habitDays) {

    return (
        <Day
            key={index}
            color={(habitDays.includes(index) ? "#D5D5D5" : "#FFFFFF")}
            background={habitDays.includes(index) ? "#FFFFFF" : "#D5D5D5"}>
            {day}
        </Day>
    )
}

const SessionHabit = styled.div`
    height: 14vh;
    width: 100%;
    background-color: #ffffff;

    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

        h1{
            font-size: 20px;
        }


`;
const HabitName = styled.div`
    height: 30%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

        h1{
            color: "#666666";
        }
`;

const Trash = styled.div`

    height: 30px;
    width: 30px;

    display: flex;
    justify-content: right;
    align-items: center;

    img{
            height: 15px;
            width: 15px;

        }
`;

const Days = styled.div`
    width: 75%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #d5d5d5;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.background};
    color: ${props => props.color};

`;