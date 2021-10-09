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
    padding: 40px 20px;

    p {
        align-self: left;
        color: var(--medGrey);
        font-weight: 600;
        padding: 0;
        margin: 0 0 5px 2px;
    }

    input {
        background-color: #E3E3E3;
        border: none;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        font-size: 1.5rem;
        padding-left: 10px;

        :focus {
            outline: none;
        }

        ::placeholder {
            font-size: 1.5rem;
            text-justify: center;
        }
    }
`;