import styled from 'styled-components'

export const ImageComponent = styled.div`
  max-width: 430px;
  width: 100%;
  height: 556px;
  @media only screen and (max-width: 768px) {
    display: none;
    width: 250px;
    height: 324px;
    margin: 0 35px;
  }
`
