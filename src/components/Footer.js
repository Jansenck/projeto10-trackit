import {Link} from 'react-router-dom';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CirclesWithBar } from 'react-loader-spinner';

import styled from 'styled-components';
import { CenturyView } from 'react-calendar';
import { useContext } from 'react';
import HabitsContext from './contexts/HabitsContext';

export default function Footer(){

    const {progress} = useContext(HabitsContext);

    return(
        <NavBar>
            <Link to="/habitos" style={linkStyle}>
                <p>Hábitos</p>
            </Link>
            <div style={{ width: '100px', height: '100px'}}>
                <Link to="/hoje" style={linkStyle}>
                    <CircularProgressbar
                        value={progress}
                        text={'Hoje'}
                        background={true}
                        backgroundPadding={6} 
                        styles={buildStyles({
                            textColor: 'white',
                            backgroundColor: '#52B6FF',
                            pathColor: 'white',
                            trailColor: 'transparent'
                        })}
                    />
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