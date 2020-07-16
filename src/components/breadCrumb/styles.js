import styled from 'styled-components'

export const Home = styled.div`
  height: 38px;
  max-width: 154px;
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: #aeb6c1;
  margin-left: 10px;
  margin-bottom: 11px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  div {
    margin: 0;
  }
  @media only screen and (max-width: 1100px) {
    margin-left: 10%;
    transition: all 0.5s ease-out;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
