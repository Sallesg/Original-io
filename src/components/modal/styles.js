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
    display: none;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  line-height: 100%;
  text-transform: uppercase;
  color: #202020;
  margin: 20px 19px 0 19px;
`

export const ItemNumber = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: #202020;
  margin: 0 0 17px 19px;
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
`

export const ShareValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #7f7f7f;
  margin-left: 19px;
`

export const Color = styled.div`
  display: flex;
  align-items: center;
  margin-left: 19px;
  margin-top: 34px;
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
`

export const SizeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 3px 58px 0px 19px;
`

// RESPONSIVE VERSION

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  justify-content: center;
  padding: 0 10px;
  @media only screen and (min-width: 769px) {
    display: none;
    transition: all 0.5s ease-out;
  }
`

export const MobileTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
  color: #de8f75;
`

export const MobileRefer = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #7f7f7f;
  margin-bottom: 9px;
`
export const ImageMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px 6px;
`

export const MobileColor = styled.div`
  margin-left: 6px;
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #202020;
  }
`

export const MobileColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`
export const MobileSize = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  margin-left: 8px;
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #202020;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    text-align: right;
    text-decoration-line: underline;
    color: #de8f75;
    margin-right: 51px;
  }
`
export const MobileSizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 57px 33px 5px;
`

export const MobileShopPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 7px;
`

export const PriceContainer = styled.div`
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: line-through;
    color: #e35442;
  }
  strong {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #686868;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #7f7f7f;
  }
`

export const ButtonAdd = styled.button`
  width: 150px;
  height: 60px;
  background: #32917b;
  border: none;
  border-radius: 3px;
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
`

export const MobileDescription = styled.div`
  margin: 20px 5px 0;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #e0967e;
    text-align: left;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #202020;
    text-align: left;
  }
`
