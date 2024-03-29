import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ThreeDots } from  'react-loader-spinner';
import styled from "styled-components";
import axios from "axios";

import logo from "../assets/bigLogo.png";
import UserContexts from "../contexts/UserContexts";

export default function SignIn(){

    const navigate = useNavigate();
    const {setSignIn, setToken, setImage} = useContext(UserContexts);

    const [loading, setLoading] = useState(false);
    const [disableForm, setDisableForm] = useState("");

    const [userData, setUserData] = useState({email: "", password: ""});

    function sendUserData(event){

        event.preventDefault();

        setLoading(true);
        setDisableForm("disabled");
        
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body = userData;
        const promise = axios.post(URL, body);

        promise.then((response)=> {
            const {token, image, name} = response.data;

            setImage(image);
            setToken(token);
            setSignIn(true);
            navigate("/today")
            
            const localData = {token, image};
            const serializeUserData = JSON.stringify(localData);
            localStorage.setItem("userData", serializeUserData);

        });
        promise.catch(error => {

            const {message} = error.response.data;
            setLoading(false);
            setDisableForm("");
            window.alert(message);
        });
    }

    return(
        <>
            <Container disabled={disableForm}>
                <div>
                    <Logo>
                    <img src={logo} alt={logo}/>
                </Logo>
                <Form>
                    <input type="text" placeholder="email" value={userData.email} 
                        onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <input type="password" placeholder="senha" value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}/>

                    {loading?
                        <button 
                            style={{
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                                opacity: "0.7"
                            }}>

                            <ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#ffffff" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            /> 

                        </button>
                            :
                        <button type="submit" onClick={sendUserData}>Entrar</button>
                    }
                </Form>
                <Link to="/signUp" style={{fontSize: "14px", color:"#52B6FF", marginTop: "35px"}}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
                </div>
                
            </Container>
        </>
    );
}

const Container = styled.fieldset`
    height: 100vh;
    width: 100%;
    background-color: #FFFFFF;

    div:nth-child(1){
        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 5%;
        box-sizing: border-box;
    }
`;

const Logo = styled.div`
    height: 182px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: space-between;
    margin: 10% 5%;
    box-sizing: border-box;
`;

const Form = styled.form`
    height: 167px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
        input{
            height: 46px;
            width: 100%;
            font-size: 20px;
            color: #666666;
            border: 1px solid #d5d5d5;
            border-radius: 5px;
        }
        input::placeholder{
            color: #d4d4d4;
        }
        button{
            height: 50px; 
            width: 100%;
            font-size: 21px;
            background-color:#52B6FF;
            color: #ffffff;
            border-radius: 5px;
        }
`;



