import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";

//Components
import InputField from './InputField'
import Tips from "./Tips";
import Results from "./Results";

const Main = () => {
    const [tipAmount, setTipAmount] = useState('0.00');

    return (
        <Wrapper> 
            <Calculator>
                <Section1>
                 <InputField label="Bill" placeholder="0"/>
                 <Tips/>
                 <InputField label="Number of People?" placeholder="0"/>
                </Section1>

                <Section2>
                    <Results tipAmount={tipAmount}/>
                </Section2>
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
    height: 517px;
    width: 900px;
    background-color: #fff;
    border-radius: 30px;
    padding: 40px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const Section2 = styled.div`
    height: 100%;
`;