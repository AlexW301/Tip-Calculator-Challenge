import React from "react";
import styled from "styled-components";
import { useState, useEffect } from 'react';


const InputField = ({ label, placeholder, setBillAmount, setNumberOfPeople, reset, setReset }) => {
    const [ state, setState ] = useState('');

    useEffect(() => {
        if (reset) {
            setState('')
            setReset(false)
        }
    }, [reset, setReset])
    
    useEffect(() => {
        if(label === 'Bill') {
            setTimeout(() => {
                setBillAmount(state)
            }, 500)
        } else if(label === 'Number of People?') {
            setTimeout(() => {
                setNumberOfPeople(state)
            }, 500)
        }
    }, [state, label, setBillAmount, setNumberOfPeople])
    
    return (
        <Wrapper>
            <Content>
                <p>{label}</p>
                <input 
                placeholder={placeholder}
                onChange={event => setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default InputField;

const Wrapper = styled.div``;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    p {
        align-self: left;
        color: var(--medGrey);
        font-weight: 600;
        padding: 0;
        margin: 0 0 5px 2px;
    }

    input {
        background-image: url('https://tip-calculator-app-iliwili.netlify.app/static/media/icon-dollar.9f9be353.svg');
        background-repeat: no-repeat;
        background-position: 10px;
        background-color: #F4FAFA;
        border: none;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        font-size: 1.5rem;
        padding-left: 10px;
        direction: rtl;
        font-family: 'Space Mono', monospace;
        color: #00494d;

        :focus {
            outline: none;
        }

        ::placeholder {
            font-size: 1.5rem;
            text-justify: center;
        }
    }
`;