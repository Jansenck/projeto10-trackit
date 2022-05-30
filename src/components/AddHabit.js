import {useState, useContext} from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import Day from './Day';
import UserContext from './contexts/UserContext';


export default function AddHabit(){
    const [openForm, setOpenForm] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [habitDays, setHabitDays] = useState([]);
    const [newHabit, setNewHabit] = useState([]);
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [selectedDays, setSelectedDays] = useState([]);
    const [save, setSave] = useState(true);

    const serializedUsedData = localStorage.getItem("localUserData");
    const localUserData = JSON.parse(serializedUsedData);

    function buttonSave(event){
        
        event.preventDefault();

        const habit = {
            name:habitName,
            days:selectedDays
        }

        setNewHabit([...newHabit, habit]);

        const body = newHabit;

        console.log(habit)
        console.log(newHabit)

        

        const config = {
            headers: {
                "Authorization": `${localUserData.token}`
            }
        }

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body, config);

        console.log(habit)
    }

    function toggleDay(selected, index){
        if(!selected){
            setSelectedDays([...selectedDays, index]);

        } else{
            const newDay = selectedDays.filter(day => day !== index);
            setSelectedDays(newDay);
        }
        console.log(newHabit)
    }

    // const weekDays = renderDays(selectedDays);

    return(
        <>
            <MyHabits>
                <p>Meus hábitos</p>
                <button onClick={() => {setOpenForm(!openForm)}}>+</button>
            </MyHabits>

            {openForm && <ConfigureHabit key={1}>
                <form onSubmit={buttonSave}>
                    <input key="name" type="text" placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)} required/>
                    <Days>
                        {days.map((day, index) => <DiaDaSemana toggleDay={toggleDay} index={index} day={day} />)}
                    </Days>
                <Buttons>
                    <Cancel>Cancelar</Cancel>
                    <Save type="submit">Salvar</Save>
                </Buttons>
                </form>
            </ConfigureHabit>}
        </>
    );
}

function DiaDaSemana({toggleDay, day, index}) {
    const [selected, setSelected] = useState(false);

    return (
        <Divao onClick={() => { setSelected(!selected); toggleDay(selected, index) }} selected={selected}>{day}</Divao>
    )
}

const Divao = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({selected}) => selected ? 'black' : 'red'}
`;
const MyHabits = styled.div`
    height: 10vh;
    width: 100%;

    margin-top: 12vh;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 22px;
    color: #126BA5;

        button{
            height: 40px;
            width: 40px;
            background-color:#52B6FF;

            font-size: 30px;
            font-style: bold;
            color: #FFFFFF;
        }
`;
const ConfigureHabit = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #ffffff;

    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;

    margin-bottom: 10px;

    position: relative;

        form{
            height: 55%;
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        input{
            height: 45%;
            width: 80vw;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-size: 18px;
        }
        input::placeholder{
            color: #D5D5D5;
        }
`;

const Days = styled.div`
    width: 75%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Buttons = styled.div`
    height: 25%;
    width: 70%;
    
    position: absolute;
    bottom: 15px;
    right: -7px;
    style: ${props => props.save};
`;

const Save = styled.button`
    height: 100%;
    width: 45%;
    background-color: #52B6FF;
    color: #FFFFFF;
`;

const Cancel = styled.button`
    height: 100%;
    width: 45%;
    background-color: #FFFFFF;
    color: #52B6FF;
    `;
