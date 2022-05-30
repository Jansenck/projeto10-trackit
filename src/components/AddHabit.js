import {useState} from 'react';
import styled from 'styled-components';

import Day from './Day';


export default function AddHabit(){

    const [newHabit, setNewHabit] = useState([]);
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [isSelected, setIsSelected] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [save, setSave] = useState(true);

    console.log(days)

    function buttonSave(){
        setSave(false);

        return(
            <Buttons save={save}/>
        );
    }

    function toggleDay(){

    }

    function renderDays(){
        
        return days.map((day, index )=> {

            
            <Day 
                key={index} 
                id={index}  
                isSelected={isSelected}
                selectedDays={selectedDays}
                selectingDay={(id) => toggleDay(id)}
            />
        })

    }

    const weekDays = renderDays();

    function addHabit(){
        setNewHabit([...newHabit,

        <ConfigureHabit key={newHabit.length}>
        <form>
            <input key="name" type="text" placeholder="nome do hábito"/>
            <Days>
                {weekDays}
            </Days>
        </form>
        <Buttons>
            <Cancel>Cancelar</Cancel>
            <Save onClick={buttonSave}>Salvar</Save>
        </Buttons>
        </ConfigureHabit>]
        );
    }

    return(
        <>
            <MyHabits>
                <p>Meus hábitos</p>
                <button onClick={addHabit}>+</button>
            </MyHabits>
            {newHabit}
        </>
    );
}

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

