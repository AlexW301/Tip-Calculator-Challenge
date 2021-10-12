import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";

//Components
import InputField from './InputField'
import Tips from "./Tips";
import Results from "./Results";

const Main = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercent, setTipPercent] = useState();
    const [numberOfPeople, setNumberOfPeople] = useState();

    const [tipAmount, setTipAmount] = useState('0.00');
    const [totalAmount, setTotalAmount] = useState('0.00');

    const [reset, setReset] = useState();

    useEffect(() => {
        if (billAmount > 0 && tipPercent && numberOfPeople > 0) {
            let calcTip = billAmount * tipPercent
            let tipPerPerson = calcTip / numberOfPeople
            let bill = billAmount
            let billPerPerson = bill / numberOfPeople
            let total = billPerPerson + tipPerPerson
            setTipAmount(tipPerPerson.toFixed(2))
            setTotalAmount(total.toFixed(2))
        }
    }, [billAmount, numberOfPeople, tipPercent, tipAmount])

    return (
        <Wrapper> 
            <Calculator>
                <Section1>
                 <InputField label="Bill" placeholder="0" setBillAmount={setBillAmount} setNumberOfPeople={setNumberOfPeople} setReset={setReset} reset={reset}/>
                 <Tips setTipPercent={setTipPercent} setReset={setReset} reset={reset}/>
                 <InputField label="Number of People?" placeholder="0" setBillAmount={setBillAmount} setNumberOfPeople={setNumberOfPeople} setReset={setReset} reset={reset}/>
                </Section1>

                <Section2>
                    <Results tipAmount={tipAmount} totalAmount={totalAmount} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} setNumberOfPeople={setNumberOfPeople} setBillAmount={setBillAmount} setTipPercent={setTipPercent} setReset={setReset}/>
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

    @media screen and (max-width: 924px) {
        align-items: flex-end;
    }
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

    @media screen and (max-width: 924px) {
        grid-template-columns: 1fr;
        height: 900px;
        width: 100%;
    }
`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const Section2 = styled.div`
    height: 100%;
`;