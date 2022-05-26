import styled from 'styled-components';
import logo from "../image/big-logo.png"

export default function BigLogo(){

    return(
        <Logo>
            <img src={logo} alt="logo"/>
        </Logo>
    );
}

const Logo = styled.div`
    height: 40vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
`;