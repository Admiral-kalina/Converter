import React from 'react';
import CurentInput from "../UI/CurentInput";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {format} from "../../format";

const Converter = () => {

    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('USD')
    const [rates, setRates] = useState([])

    useEffect(()=>{
        axios.get('https://api.fastforex.io/fetch-all?&api_key=53267f9049-c1e4c464dd-rcw9df')
            .then(response =>{
                setRates(response.data.results)
            })
    },[])


    function handleAmount1Change(amount1){
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1)
    }

    function handleCurrency1Change(currency1){
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1)
    }

    function handleAmount2Change(amount2){
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2)
    }

    function handleCurrency2Change(currency2){
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2)
    }

    return (
        <ConvertWrapper>
            <ConverBlock>
                <CurentInput currencies={Object.keys(rates)}
                             amount={amount1} onAmountChange={handleAmount1Change}
                             currency={currency1} onCurrencyChange={handleCurrency1Change}
                />
                <CurentInput currencies={Object.keys(rates)}
                             amount={amount2} onAmountChange={handleAmount2Change}
                             currency={currency2} onCurrencyChange={handleCurrency2Change}
                />
            </ConverBlock>
        </ConvertWrapper>
    );
};

export default Converter;

const ConvertWrapper = styled.div `
  height: 96vh;
  background-image: url("https://thumbs.gfycat.com/ComplexNiceBadger-size_restricted.gif");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
`;

const ConverBlock = styled.div`
  background-image: url("https://thumbs.gfycat.com/ComplexNiceBadger-size_restricted.gif");
  background-size: cover;
 
  padding: 50px;
 
  
`;