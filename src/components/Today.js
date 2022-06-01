import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dayjs, { locale } from "dayjs";
import "dayjs/locale/pt-br";

import Header from './Header';
import Footer from './Footer';

import HabitsContext from './contexts/HabitsContext';
import check from '../image/check.png'


export default function Today(){

    dayjs.locale('pt-br');
    const now = dayjs().format("dddd, DD/MM");

    const { habitsToday, setHabitsToday } = useContext(HabitsContext);
    const { progress, setProgress } = useContext(HabitsContext);

    const serializedUsedData = localStorage.getItem("localUserData");
    const localUserData = JSON.parse(serializedUsedData);

    const [validateButton, setValidateButton] = useState(false);

    const config = {headers:{"Authorization": `Bearer ${localUserData.token}`}}
    
    useEffect(()=> {

        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

            promisse.then((response) => {

                setHabitsToday(response.data);

                let x = 0;

                for(let i = 0; i < response.data.length; i++){
                    if(response.data[i].done){
                        x++;
                    }
                }

                if(response.data.length === 0){
                    setProgress(0);
                } else {
                    setProgress((100*(x/response.data.length)).toFixed());
                }
                    
            });

            promisse.catch(() => window.alert("deu ruim..."));

    },[progress])

    function checkIt(id, done){

        done?
            revertHabit(id)
        :
            saveHabit(id)
    }

    function refreshProgress(){
        let x = 0;

        for(let i = 0; i < habitsToday.length; i++){
            if(habitsToday[i].done){
                x++;
            }
        }
        setProgress((100*(x/habitsToday.length)).toFixed());
    }


    function saveHabit(habitId){

        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,null,config);

        promisse.then(() => {
            
                const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

                promisse.then(() => {

                    const aux = [...habitsToday];
                    for(let i = 0;i < aux.length;i++){
                        if(aux[i].id === habitId){
                            aux[i].done = true;
                        }
                    }
                    setHabitsToday([...aux]);
                    refreshProgress();
                                   
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

                    const aux = [...habitsToday];
                    for(let i = 0;i < aux.length;i++){
                        if(aux[i].id === habitId){
                            aux[i].done = false;
                        }
                    }
                    setHabitsToday([...aux]);
                    refreshProgress();  
                        
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
                <h1>{now.charAt(0).toUpperCase() + now.slice(1)}</h1>

                {(progress === 0)?

                    <h3>Nenhum hábito concluído ainda</h3>
                    :
                    <h2 >{progress}% dos hábitos concluídos</h2>
                }
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

        button{
            height: 40px;
            width: 40px;
            background-color:#52B6FF;

            font-size: 30px;
            font-style: bold;
            color: #FFFFFF;
        }

        h1{  
            font-size: 22px;
            color: #126BA5;
            margin-bottom: 10px;
        }
        h2{
            font-size: 18px;
            color: #8FC549;
        }
        h3{
            font-size: 18px;
            color: #BABABA;        
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


