import React from "react";
import styled from "styled-components";

const Results = ({ tipAmount }) => {

    return (
        <Wrapper>
            <Content>
                <ResultsBox>
                    <Label>
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                    </Label>
                    <h1>${tipAmount}</h1>
                </ResultsBox>
                <ResultsBox>
                <Label>
                    <h3>Total</h3>
                    <p>/ person</p>
                    </Label>
                    <h1>$0.00</h1>
                </ResultsBox>
                <Reset>RESET</Reset>
            </Content>
        </Wrapper>
    )
}

export default Results;

const Wrapper = styled.div`
    background-color: #00494D;
    height: 100%;
    border-radius: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    position: relative;
    height: 100%;
`;

const ResultsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #26C0AB;
        font-size: 3rem;
        margin: 15px;
    }
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;

    h3 {
        padding: 0;
        margin: 0;
        color: #fff;
    }

    p {
        margin: 0;
        color: #5E7A7D;
        font-weight: 600;
    }
`;

const Reset = styled.button`
    position: absolute;
    bottom: 30px;

    width: 337px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #26c0ab;
    color: #00494d;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
`;