import {Link} from 'react-router-dom';
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { CirclesWithBar } from 'react-loader-spinner';

import styled from 'styled-components';

export default function Footer(){

    return(
        <NavBar>
            <Link to="/habitos" style={linkStyle}>
                <p>Hábitos</p>
            </Link>
            <div style={{ width: '100px', height: '100px' }}>
                <Link to="/hoje" style={linkStyle}>
                    <CircularProgressbar
                        value={60}
                        text={'Hoje'}
                        background={true}
                        backgroundPadding={6} 
                        styles={{
                            root:{},
                            text:{
                                transform:'translate(-24px, 6px)',
                                textColor: "#fff",
                            },
                            path:{
                                stroke: '#FFFFFF',
                                strokeLinecap: 'round',
                            },
                            background:{
                                fill: '#52B6FF',
                            },
                            trail:{
                                stroke: 'transparent'
                            }
                    }}/>
                </Link>
            </div>
            <Link to="/historico" style={linkStyle}>
                <p>Histórico</p>
            </Link>
        </NavBar>
    );
}

const  NavBar = styled.footer`
    height: 11vh;
    width: 100%;

    background-color:#FFFFFF;

    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

        div{
            margin-bottom: 8vh;
        }
        p{
            height: 100%;
            font-size: 22px;
            color:#3e98c7;

            display: flex;
            justify-content: center;
            align-items: center;
        }

`;

const linkStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#FFFFFF'
}