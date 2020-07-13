import styled from 'styled-components'
import { } from '../../GlobalStyles.css'

export const SelectSize = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #EBEBEB;
  box-sizing: border-box;
  margin: 0 1.5px;
  border-radius: 2px;
  cursor: pointer;
  background: ${
    ({active}) => (active ? '#DE8F75' : 'transparent')
  };
`

export const Text = styled.p`
    text-align: center;
    width: 80%;
    height: 80%;
    margin-top: 7px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    background-color: ${
    ({chooseSize}) => (chooseSize)
  };
    color: ${
      ({active}) => (active ? '#fff' : '#5F75AA')
  };
  
`
