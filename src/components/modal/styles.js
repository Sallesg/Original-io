import styled from 'styled-components'

export const Modal = styled.div`
  max-width: 444px;
  width: 100%;
  height: 533px;
  border: 2px solid #d2e1df;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 122px;
  @media only screen and (max-width: 768px) {
    border: none;
    max-width: 768px;
    width: 100%;
    height: auto;
    border-radius: 0px;
    margin: 0;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  line-height: 100%;
  text-transform: uppercase;
  color: #202020;
  margin: 20px 19px 0 19px;
  @media only screen and (max-width: 768px) {
    color: #de8f75;
    font-size: 18px;
    line-height: 29px;
    font-weight: normal;
    text-align: center;
  }
`

export const ItemNumber = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: #202020;
  margin: 0 0 17px 19px;
  @media only screen and (max-width: 768px) {
    color: #7f7f7f;
    font-size: 12px;
    line-height: 20px;
    font-weight: normal;
    text-align: center;
  }
`

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 33px;
  font-size: 20px;
  color: #686868;
  margin-left: 6px;
  text-decoration-line: none;
  p:first-child {
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #e35442;
    margin-left: 19px;
    text-decoration-line: line-through;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const ShareValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #7f7f7f;
  margin-left: 19px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const ImageMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    width: 100%;
    height: 324px;
    margin: 0 auto;
  }
`

export const Color = styled.div`
  display: flex;
  align-items: center;
  margin-left: 19px;
  margin-top: 34px;
  @media only screen and (max-width: 768px) {
    margin: 6px auto;
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #202020;
    padding-right: 10px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #5f75aa;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const Size = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SizeDescription = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 1px;
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #202020;
    padding-right: 5px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #5f75aa;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const GuideSize = styled.div`
  margin-top: 20px;
  margin-right: 58px;
  p {
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #de8f75;
  }
`

export const Text = styled.div`
  margin: 16px 19px auto 20.11px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    font-family: 'Montserrat', sans-serif;
    color: #202020;
  }
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 0 17px 22px;
  @media (max-width: 768px) {
    margin: 0;
  }
`

export const SizeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 3px 58px 0px 19px;
`
