import styled from 'styled-components'

export const ContainerSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Arrows = styled.div` 
  cursor: pointer;
  border: 2px solid #2A5A75;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  img {
    width: 8.64px;
    height: 14px;
    position: absolute;
    top: 30%;
    left: 35%;
  }
`
export const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 14px;
  color: #2A5A75;
  margin: 0 10px;

`