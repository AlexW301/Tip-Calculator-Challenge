import React from "react";
import styled from "styled-components";

const Tips = () => {

    return (
        <Wrapper>
            <Content>
                <p>Select Tip %</p>
                <TipsGrid>
                    <Tip>5%</Tip>
                    <Tip>10%</Tip>
                    <Tip>15%</Tip>
                    <Tip>25%</Tip>
                    <Tip>50%</Tip>
                    <input placeholder="Custom"/>
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