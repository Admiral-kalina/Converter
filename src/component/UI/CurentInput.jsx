import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";

const CurentInput = (props) => {
    return (
        <Group>
            <Block>
                <Input
                    type="number"
                    value={props.amount}
                    onChange={e => props.onAmountChange(e.target.value)}
                />
                <Select
                    value={props.currency}
                    onChange={e => props.onCurrencyChange(e.target.value)}
                >
                    {props.currencies.map(currency =>
                        <option
                            value={currency}
                        >{currency}</option>
                    )}
                </Select>
            </Block>
        </Group>
    );
};

CurentInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default CurentInput;

const Group = styled.div`
  background-color: #191F38;
  border-radius: 5px;
`
const Block = styled.div`
  padding: 10px;
  margin: 10px;
`
const Input = styled.input`
  background: none;
  border: none;
  color: gray;
`
const Select = styled.select`
  background: transparent;
  border: none;
  color: gray;
`