import styled from 'styled-components';


export default function Footer(){
    return(
        <NavBar>
            <p>Hábitos</p>
            <p>Hoje</p>
            <p>Histórico</p>
        </NavBar>
    );
}

const  NavBar = styled.footer`
    height: 12vh;
    width: 100%;

    background-color:#FFFFFF;

    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;