import styled from 'styled-components'

export const ContainerProductsSection = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Text = styled.div`
  max-width: 406px;
  width: 100%;
  height: 36px;
  margin: 104px auto 17px 35%;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    color: #de8f75;
    text-transform: uppercase;
    text-align: center;
  }
`

export const ProductsImagesOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
    margin: 0 16px;
  }
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
  :first-child {
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
  background-color: ${({ color }) => color};
`

// RESPONSIVE VERSION

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: none;
    transition: all 0.5s ease-out;
  }
`

export const Title = styled.div`
  margin: 40px 0 19px 0;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #de8f75;
  }
`

export const MobileImagesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 10px;
`

export const PriceImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 4px;
  img {
    width: 138px;
    height: 178px;
  }
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #202020;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    color: #202020;
  }
`
