import styled from 'styled-components'

export const Modal = styled.div`
  width: 444px;
  height: 533px;
  border: 2px solid #D2E1DF;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 122px;
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
    color: #E35442;
    margin-left: 19px;  
    text-decoration-line: line-through;
    }
`

export const ShareValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #7F7F7F;
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
    color: #5F75AA;
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
    color: #5F75AA;
  }
`

export const GuideSize = styled.div` 
   margin-top: 20px;
   margin-right: 58px;
   p {
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #DE8F75;
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
  margin: 3px 58px 0px 19px 
`
