import styled from 'styled-components'

export const ContainerRightModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(32, 32, 32, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  z-index: 1;
`

export const ModalSideView = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  width: 525px;
  height: 100vh;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84px;
`

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 40px;
  h1 {
    font-size: 26px;
    line-height: 42px;
    text-transform: uppercase;
    color: #de8f75;
    font-weight: normal;
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 29px;
    color: #aeb6c1;
  }
`

export const CloseModal = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 11.83px;
  margin-right: 11.83px;
  img {
    width: 16.33px;
    height: 16.33px;
  }
`

export const Line = styled.hr`
  border: 1px solid #e3e3e3;
  max-width: 466px;
  width: 100%;
`

export const ProductsItems = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 20px 0 30px;
  overflow: auto;
`
export const ShareColumns = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 33.33px;
`

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 26.56px;
  &:first-child {
    margin-top: 30px;
    margin-bottom: 5.67px;
  }
  &:last-child {
    margin-top: 35.89px;
    margin-bottom: 85px;
  }
`

export const VerticalLine = styled.hr`
  background: #e2e2e2;
  border-radius: 2px;
  height: 427px;
  width: 5px;
  overflow: scroll;
  margin-top: 17px;
`

export const ImagesSection = styled.div`
  width: 46px;
  height: 59px;
`

export const ProductsDetails = styled.div``

export const Text = styled.h2`
  font-family: 'Monteserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #202020;
`
export const Price = styled.h3`
  font-family: 'Monteserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`

export const DeleteItem = styled.div`
  width: 9.33px;
  height: 9.33px;
`

export const CountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #5f75aa;
    padding: 0 12px;
  }
`

export const Minus = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  color: #aeb6c1;
`

export const More = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  color: #aeb6c1;
`

export const PromotioWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const Promotion = styled.div`
  background-color: #aeb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`

export const TextPromotion = styled.h6`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background-color: #e3e3e3;
`

export const PriceDetails = styled.div``

export const Total = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #202020;
`

export const ShareTotal = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`

export const Checkout = styled.button`
  max-width: 235.41px;
  width: 100%;
  height: 42px;
  background: #32917b;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`

// RESPONSIVE VERSION

export const MobileRightContainer = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  top: -40px;
  left: 0;
  z-index: 300;
`

export const HeaderRight = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
`

export const MobileTitle = styled.div`
  max-width: 768px;
  width: 100%;
  margin-left: 25px;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    color: #de8f75;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #aeb6c1;
  }
`

export const CloseMobileModal = styled.img`
  margin-right: 12px;
  width: 17px;
  height: 17px;
`

export const ItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 329px;
  max-width: 768px;
  width: 100%;
  margin-top: 10px;
`
export const MobileColumns = styled.div`
  display: flex;
  flex-direction: column;
`
export const MobileProducts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const MobileImages = styled.div`
  img {
    width: 46px;
    height: 59px;
    margin-left: 12px;
  }
`
export const MobileProductsDetail = styled.div``

export const MobileText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  display: flex;
  align-items: center;

  color: #202020;
`

export const MobilePrice = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #000000;
`

export const MobilePromotion = styled.div`
  background: #aeb6c1;
  width: 100%;
`
export const MobileTextPromotion = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`

export const MobileFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 768px;
  width: 100%;
  height: 63px;
  background: #e3e3e3;
`

export const MobilePriceDetails = styled.div`
  margin: 0 17px 0 12px;
`

export const MobileTotal = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #686868;
  margin-left: 12px;
`

export const MobileShareTotal = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  color: #686868;
  margin-left: 12px;
`

export const MobileCheckout = styled.button`
  width: 145px;
  height: 42px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #32917b;
  border: none;
  border-radius: 3px;
  margin-right: 17px;
`

export const MobileCountSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #5f75aa;
    padding: 0 5px;
  }
`

export const MobileDeleteItem = styled.div`
  margin-right: 27px;
  img {
    width: 9.33px;
    height: 9.33px;
  }
`

export const MobileMinus = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  color: #aeb6c1;
`

export const MobileMore = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 23px;
  color: #aeb6c1;
`
