import {useState} from 'react';
import styled from 'styled-components';

import Header from "./Header";
import CreateHabits from './CreateHabits';
import Footer from "./Footer";
import AddHabit from './AddHabit';

export default function Habits(){

    return(
        <>
            <Header/>
            <AddHabit/>
            <CreateHabits/>
            <Footer/>
        </>
    );
}