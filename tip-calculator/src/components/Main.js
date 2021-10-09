import React from "react";
import styled from "styled-components";

//Components
import Bill from './Bill'
import Tips from "./Tips";

const Main = () => {

    return (
        <Wrapper>
            <Calculator>
                <div>
                 <Bill/>
                 <Tips/>
                </div>
                <div>

                </div>
            </Calculator>
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
    height: 100vh;
    background-color: hsl(185, 41%, 84%);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Calculator = styled.div`
    height: 500px;
    width: 1000px;
    background-color: #fff;
    border-radius: 30px;

    display: grid;
    grid-template-columns: 1.3fr 1fr;

`;