import styled from 'styled-components';

export const ModalCard = styled.div`
  background-color: rgba(32, 32, 32, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  background-color: #FFFFFF;
  border-radius: 3px;
  width: 445px;
  height: 602px;
  /* margin: 62px auto; */
  
` 

export const CloseModal = styled.div` 
  display: flex;
  width: 16.33px;
  height: 16.33px;
  margin: 16.83px 19.83px 17.83px 408.83px;  
`

export const ItemsCard = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  width: 100%;
  height: 100%;
  img {    
    width: 305px;
    height: 358.65px;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 22px;
    line-height: 100%;
    text-transform: uppercase;
    color: #DE8F75;
    text-align: center;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    text-decoration-line: underline;
    color: #AEB6C1;
    font-size: 14px;
    margin-bottom: 23px;
  }
`

export const EndShop = styled.button` 
  width: 305px;
  height: 50px;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  background: #32917B;
  border-radius: 3px;
  border: none;
`