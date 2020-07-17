import styled from 'styled-components'

export const Container = styled.header`
  height: 136px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  @media only screen and (max-width: 800px) {
    display: none;
    transition: all 0.5s ease-out;
  }
`

export const LogoWrapper = styled.div`
  height: 86px;
  margin-top: 26px;
`

export const Menu = styled.div`
  height: 50px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`
export const Login = styled.div`
  display: flex;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  color: #686868;
`

export const Categories = styled.div`
  max-width: 754px;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  ul {
    width: 462px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    list-style-type: none;
    font-size: 14px;
    color: #686868;
    li {
      width: 80px;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`

export const Cart = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #686868;
  border-bottom: 1px solid rgba(104, 104, 104, 0.4);
  margin-right: 30px;
  padding: 5px 0;
  img {
    margin-right: 17px;
    margin-left: 5px;
  }
  span {
    margin-right: 5px;
  }
`

export const Bag = styled.div`
  display: flex;
  margin-right: 44px;
  p {
    display: flex;
    font-size: 12px;
    align-items: flex-end;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    color: #686868;
    margin-left: 4px;
  }
`

// RESPONSIVE VERSION

export const MobileContainer = styled.div`
  max-width: 768px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  @media only screen and (min-width: 801px) {
    display: none;
    transition: all 0.5s ease-out;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25px;
  width: 100%;
  height: 14px;
  margin-left: 17.33px;
  transition: opacity 500ms;
`

export const One = styled.hr`
  height: 5px;
  width: 100%;
  margin: 2px auto;
  border: 1.5px solid #686868;
`

export const Two = styled.hr`
  height: 5px;
  width: 100%;
  margin: 2px auto;
  border: 1.5px solid #686868;
`

export const Three = styled.hr`
  height: 5px;
  width: 100%;
  margin: 2px auto;
  border: 1.5px solid #686868;
`

export const MobileLogo = styled.div`
  max-width: 110px;
  width: 100%;
  img {
    max-width: 110px;
    width: 100%;
    height: 25px;
  }
`

export const MobileIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 14.86px;
`

export const MobileSearch = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 24px;
`

export const MobileBag = styled.img`
  width: 21.36px;
  height: 26.83px;
`

export const MenuShowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  z-index: 220;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(32, 32, 32, 0.9);
`

export const MobileMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  cursor: pointer;
  margin: -80px 8%;
  li {
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #de8f75;
    margin: -100px 0;
  }
`

export const CloseMenu = styled.div`
  p {
    color: #fff;
    font-size: 25px;
    margin: 20px 30px;
    font-weight: 500;
    cursor: pointer;
  }
`
