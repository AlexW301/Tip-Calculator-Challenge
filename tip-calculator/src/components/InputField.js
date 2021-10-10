import React from "react";
import styled from "styled-components";

const InputField = ({ label, placeholder }) => {
    
    return (
        <Wrapper>
            <Content>
                <p>{label}</p>
                <input placeholder={placeholder}/>
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