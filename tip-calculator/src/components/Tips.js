import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Tips = ({ setTipPercent, reset, setReset }) => {
    const [state, setState] = useState('');

    useEffect(() => {
        if(reset) {
            setState('');
            setReset(false)
        }
    }, [setState, reset, setReset])

    useEffect(() => {
        setTimeout(() => {
            setTipPercent(state)
        }, 500)
        
    }, [setTipPercent, state])

    return (
        <Wrapper>
            <Content>
                <p>Select Tip %</p>
                <TipsGrid>
                    <Tip onClick={() => setState('.05')}>5%</Tip>
                    <Tip onClick={() => setState('.10')}>10%</Tip>
                    <Tip onClick={() => setState('.15')}>15%</Tip>
                    <Tip onClick={() => setState('.18')}>18%</Tip>
                    <Tip onClick={() => setState('.20')}>20%</Tip>
                    <input 
                    placeholder="Custom"
                    onChange={(event) => setState(event.currentTarget.value)}
                    value={state}
                    />
                </TipsGrid>
            </Content>
        </Wrapper>
    )
}

export default Tips;

const Wrapper = styled.div``;

const Content = styled.div`

    p {
        color: var(--medGrey);
        font-weight: 600;
    }

    input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: none;
        background-color: #F4FAFA;
        direction: rtl;
        text-align: right;
        font-size: 1.7rem;
        color: #56878a;

        ::placeholder {
            text-align: center;
            color: #56878a;
        }
    }
`;

const TipsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

const Tip = styled.button`
    border: none;
    background-color: hsl(183, 100%, 15%);
    height: 50px;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 900;

    :hover {
        background-color: hsl(172, 67%, 45%);
    }
`;