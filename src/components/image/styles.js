import styled from 'styled-components'

export const ImageComponent = styled.div`
  max-width: 430px;
  width: 100%;
  height: 556px;
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 1100px) {
    display: none;
    transition: all 0.5s ease-out;
  }
  @media only screen and (max-width: 1150px) {
    max-width: 300px;
    width: 100%;
    height: 426px;
    transition: all 0.5s ease-out;
  }
`
