import { useState, useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "./contexts/UserContext";
import Habit from "./Habit";
import HabitsContext from "./contexts/HabitsContext";

export default function CreateHabits(){

    const {token} = useContext(UserContext);

    const {habits} = useContext(HabitsContext);

    return(
        (habits.length !== null)?

            <Habit/>
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

