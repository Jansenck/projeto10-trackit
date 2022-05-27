import {useState} from 'react';
import styled from 'styled-components';


export default function AddHabit(){

    const [newHabit, setNewHabit] = useState([]);

    function addHabit(){
        setNewHabit([...newHabit,

        <ConfigureHabit>
        <form>
            <input type="text" placeholder="nome do hábito"/>
            <Days>
                <div id="sunday">D</div>
                <div id="monday">S</div>
                <div id="tuesday">T</div>
                <div id="wednesday">Q</div>
                <div id="thursday">Q</div>
                <div id="friday">S</div>
                <div id="saturday">S</div>
            </Days>
        </form>
        <Buttons>
            <Cancel>Cancelar</Cancel>
            <Save>Salvar</Save>
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

