import { useState } from "react";
import styled from "styled-components";

export default function CreareHabtis(){

    const [thereIsHabits, setThereIsHabits] = useState(false);

    return(
        thereIsHabits?
        <p>"Já tem aqui"</p>
        :
        <>
        <Message>
            {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
        </Message>
        </>
    );
}

const Message = styled.div`
    font-size: 18px;
    color: #666666;
`;