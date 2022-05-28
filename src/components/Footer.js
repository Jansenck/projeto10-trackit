import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { CirclesWithBar } from 'react-loader-spinner';

import styled from 'styled-components';

export default function Footer(){

    return(
        <NavBar>
            <p>Hábitos</p>
            <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                    value={60}
                    text={'Hoje'}
                    background={true}
                    backgroundPadding={6} 
                    styles={{
                        root:{},
                        text:{
                            transform:'translate(-24px, 6px)',
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
                        },
                }}/>
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