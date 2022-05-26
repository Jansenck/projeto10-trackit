import { useState } from "react";
import styled from "styled-components";

export default function CreareHabtis(){

    const [thereIsHabits, setThereIsHabits] = useState(false);

    return(
        !thereIsHabits?
        <CreateHabit>
                <form>
                    <input type="text" placeholder="nome do hábito"/>
                    <Days>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                    </Days>
                </form>
                <Buttons>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
                </Buttons>
            </CreateHabit>
        :
        <>
        <Message>
            {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
        </Message>
        </>
    );
}

const CreateHabit = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #ffffff;

    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;

    position: relative;

        form{
            height: 50%;
            width: 100%;
        }
`;
const Message = styled.div`

`;

const Days = styled.div`
    display: flex;
    flex-direction: row;
`;

const Buttons = styled.div`
    height: 25%;
    width: 70%;

    position: absolute;
    bottom: 15px;
    right: 0;
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