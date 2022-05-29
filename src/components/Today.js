import {useState} from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

import check from '../image/check.png'


export default function Today(){

    const [saveButtonColor, setSaveButtonColor] = useState("#EBEBEB");
    const [validateButton, setValidateButton] = useState(false);

    function saveHabit(){

        setValidateButton(!validateButton);
        
        if(validateButton === false){
            
            setSaveButtonColor("#8FC549");
            return(
    
               <Check  saveButtonColor={saveButtonColor}/>
            );
        } else if(validateButton !== false){

            setSaveButtonColor("#EBEBEB");
            return(
    
               <Check  saveButtonColor={saveButtonColor}/>
            );
        }

    }

    return(
        <>  <Header/>
            <Date>
                <h2>Segunda, 17/05</h2>
                <p>Nenhuma hábito concluído ainda</p>
            </Date>
            <ConfigureHabit>
                <Habit>
                    <HabitName>
                        {'Nome do hábito'}
                    </HabitName>
                    <Days>
                        <p>Sequência atual: 4 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Days>
                </Habit>
                <Check saveButtonColor={saveButtonColor} onClick={saveHabit}>
                    <img src={check} alt="check"/>
                </Check>
            </ConfigureHabit> 
            <Footer/>
        </>
    );
}

const Date = styled.div`
    height: 10vh;
    width: 100%;

    margin-top: 12vh;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

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
    height: 13vh;
    width: 100%;
    background-color: #ffffff;
    color: #666666;

    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Habit = styled.div`
    height: 100%;
    width: 75%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HabitName = styled.h1`
    height: 60%;
    font-size: 20px;
`;

const Days = styled.div`
    font-size: 13px;
`;

const Check = styled.button`
    height:100%;
    width: 70px;
    background-color: ${props => props.saveButtonColor};
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
