import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import Header from './Header';
import Footer from './Footer';

import HabitsContext from './contexts/HabitsContext';
import check from '../image/check.png'


export default function Today(){

    dayjs.locale('pt-br');
    const now = dayjs().format("dddd, DD/MM");

    const { habits, setHabits, habitsToday, setHabitsToday } = useContext(HabitsContext);
    const { habitsConcluded, setHabitsConcluded, progress, setProgress } = useContext(HabitsContext);

    const serializedUsedData = localStorage.getItem("localUserData");
    const localUserData = JSON.parse(serializedUsedData);

    const [validateButton, setValidateButton] = useState(false);

    const config = {headers:{"Authorization": `Bearer ${localUserData.token}`}}
    
    console.log(habitsConcluded)
    console.log(habits)

    
    useEffect(()=> {

        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

            promisse.then((response) => {

                setHabitsToday(response.data);
                    
                    response.data.filter((habit)=>{

                        if(habit.done){
                            return(
                                setHabitsConcluded([...habitsConcluded, habit])
                            );   
                        }        
                    })                    
            });
            promisse.catch(() => window.alert("deu ruim..."));

    },[])


    function checkIt(id, done){

        
        done?
            revertHabit(id)
        :
            saveHabit(id)

    }

    function saveHabit(habitId){

        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,null,config);

        promisse.then(() => {
            
                const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

                promisse.then((response) => {
                    
                    setHabitsToday(response.data);
                    
                    response.data.filter((habit)=>{

                        if(habit.done){
                            return(
                                setHabitsConcluded([...habitsConcluded, habit])


                            );   
                        } 
                    })

                        
                });
                promisse.catch(() => window.alert("deu ruim..."));
            }
        );

    }

    function revertHabit(habitId){

        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`,null,config);

        promisse.then(() => 
        
            {

                const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

                promisse.then((response) => {

                    setHabitsToday(response.data);
                    
                    response.data.filter((habit)=>{

                        if(habit.done){
                            return(
                                setHabitsConcluded([...habitsConcluded, habit])

                            );   
                        } 
        
                    })
                        
                });
                promisse.catch(() => window.alert("deu ruim dentro..."));
            }  
        );
        promisse.catch(() => window.alert("deu ruim na primeira..."));
    }

    return(
        <>  
            <Header/>
            <Date>
                <h2>{now.charAt(0).toUpperCase() + now.slice(1)}</h2>
                {progress}
            </Date>
            {
                habitsToday.map((habit)=>{
                    return(
                        <ConfigureHabit key={habit.id}>
                            <Habit>
                                <HabitName>
                                    {habit.name}
                                </HabitName>
                                <Days >
                                    <p>Sequência atual: {habit.currentSequence}</p>
                                    <p>Seu recorde: {habit.highestSequence}</p>
                                </Days>
                            </Habit>
                            <Check check={habit.done} key={habit.id} id={habit.id} onClick={()=> checkIt(habit.id, habit.done)}>
                                <img src={check} alt="check"/>
                            </Check>
                        </ConfigureHabit>
                    )
                    
                })
            } 
            <Footer/>
        </>
    );
}

const Date = styled.div`
    height: 10vh;
    width: 100%;

    margin-bottom: 4vh;
    margin-top: 15vh;
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
    background-color: ${props => props.check ? "#8FC549" : "#E7E7E7"};
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;


