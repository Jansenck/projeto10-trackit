import {useState} from 'react';
import styled from 'styled-components';


export default function AddHabit(){

    const [newHabit, setNewHabit] = useState([]);
    const [days, setDays] = useState([]);
    const [save, setSave] = useState(true);

    console.log(days)

    function buttonSave(){
        setSave(false);

        return(
            <Buttons save={save}/>
        );
    }

    function add(prop){
        setDays([...days, prop])
    }

    function addHabit(){
        setNewHabit([...newHabit,

        <ConfigureHabit>
        <form>
            <input key="name" type="text" placeholder="nome do hábito"/>
            <Days>
                <div key="sunday" id="0" onClick={() => add('0')} >D</div>
                <div key="monday" id="1" onClick={() => setDays([...days, 1])} >S</div>
                <div key="tuesday" id="2" onClick={() => setDays([...days, 2])} >T</div>
                <div key="wednesday" id="3" onClick={() => setDays([...days, 3])} >Q</div>
                <div key="thursday" id="4" onClick={() => setDays([...days, 4])} >Q</div>
                <div key="friday" id="5" onClick={() => setDays([...days, 5])} >S</div>
                <div key="saturday" id="6" onClick={() => setDays([...days, 6])} >S</div>
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

        div{
            height: 30px;
            width: 30px;

            border: 1px solid #D5D5D5;
            border-radius: 5px;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 18px;
            color: #D5D5D5;
        }
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

