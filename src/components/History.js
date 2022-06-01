import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Histoty(){

    return(
        <>  
            <Header/>
            <Message>
                {"Em breve você poderá ver o histórico dos seus hábitos aqui!"}
            </Message>
            <Footer/>
        </>
    );
}

const Message = styled.div`
    font-size: 18px;
    color: #666666;

    margin-top: 15vh;
`;