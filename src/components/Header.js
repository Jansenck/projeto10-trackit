import {useContext} from 'react';

import styled from 'styled-components';
import logo from '../image/logo.png';
import UserContext from './contexts/UserContext';

export default function Header(){

    
    const {userData} = useContext(UserContext);
    const {token, setToken} = useContext(UserContext);
    
    const serializedUsedData = localStorage.getItem("localUserData");
    const localUserData = JSON.parse(serializedUsedData);

    return(
        <Head>
            <img src={logo} alt="logo"/>
            <User src={localUserData.image} alt="image"/>
        </Head>
    );
}

const Head = styled.header`
    height: 12vh;
    width: 100%;

    background-color:#126BA5;
    padding: 10px 10px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 

    position: fixed;
    top: 0;

    display: flex;
    flex-direction: left;
    align-items: center;
    justify-content: space-between;

`;

const User = styled.img`
    height: 50px;
    width: 50px;
    
    border-radius: 100%;
`;