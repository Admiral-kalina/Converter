import React, {useState} from 'react';
import styled from "styled-components";
import {useEffect} from "react";
import axios from "axios";
import {format} from "../../format";

const Header = () => {
    const [dollar , setDollar] = useState(0)
    const [euro , setEuro] = useState(0)


    useEffect(()=>{
        axios.get('https://api.fastforex.io/fetch-all?from=UAH&api_key=https://api.fastforex.io/fetch-all?&api_key=53267f9049-c1e4c464dd-rcw9df')
            .then(response =>{
                calculate(response.data.results)
                console.log()
            })
    },[])

    const calculate = (values) =>{
        setDollar(format(1 / values.USD))
        setEuro(format(1 / values.EUR))
    }


    return (
        <Head>
            <Container>
                <Logotext>My Converter</Logotext>
                <ConvertList>
                    <ConvertItem>USD: {dollar} </ConvertItem>
                    <ConvertItem>EUR: {euro}</ConvertItem>
                </ConvertList>
            </Container>
        </Head>
    );
};

export default Header;

const Head = styled.div`
  height: 4vh;
  background-color: #191F38;
  color: #f1f1f1;
`;

const Container = styled.div`
  padding-top: 10px;
  margin: 0 40px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Logotext = styled.h1`
  font-size: 24px;
`

const ConvertList = styled.div`
  display:flex;
`

const ConvertItem = styled.div`
  margin: 0 10px;
`
