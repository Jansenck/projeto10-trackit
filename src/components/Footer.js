import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { CirclesWithBar } from 'react-loader-spinner';

import styled from 'styled-components';

export default function Footer(){
    return(
        <NavBar>
            <p>Hábitos</p>
            <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar text={'Hoje'} styles={buildStyles({
                    height: '40px',
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${100})`,
                    textColor: '#FFFFFF',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}/>
            </div>
            <p>Histórico</p>
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
    justify-content: space-between;
    align-items: center;

        div{
            margin-bottom: 8vh;
        }

`;