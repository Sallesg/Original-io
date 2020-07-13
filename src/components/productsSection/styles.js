import styled from 'styled-components'

export const Text = styled.div`
  width: 406px;
  height: 36px;
  margin: 104px 0  17px 437px;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-Style: normal;
    font-weight: normal;
    font-Size: 26px;
    color: #DE8F75;
    text-transform: uppercase;
    text-align: center;
  }
`

export const ProductsImagesOut = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
`

export const ProductsImagesIn = styled.div` 
  display: flex;
  flex-direction: column;   
  margin: 40px 0;
  img {
    width: 290.22px;
    height: 374.35px;
    margin: 0 6.5px;
  }
`

export const ImageInfos = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.21px;
  :first-child{
    margin-left: 40.65px;
  }
`

export const PriceInfo = styled.div` 
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    color: #202020;
`

export const ColorsSection = styled.div` 
  display: flex;
  margin-right: 13.7px;
`

export const Colors = styled.div` 
  width: 13.04px;
  height: 13.02px;
  border-radius: 50%;
  margin-left: 6.52px;
  background-color: ${
  ({color}) => (color)
  };
` 