import styled from 'styled-components'

export const Line = styled.hr`
  border: 2px solid #aeb6c1;
  margin-top: 145px;
  max-width: 1280;
  width: 100%;
`

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  height: 229px;
  @media only screen and (max-width: 800px) {
    display: none;
    transition: all 0.5s ease-out;
  }
`

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-left: 71px;
  @media only screen and (max-width: 1040px) {
    margin-left: 20%;
    transition: all 0.5s ease-out;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 21px;
`

export const Facebook = styled.img`
  width: 12px;
  height: 25px;
  margin: 0 15px;
`
export const Instagram = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 15px;
`
export const Pintrest = styled.img`
  width: 24px;
  height: 25px;
  margin: 0 15px;
`

export const LogosSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  margin-bottom: 74px;
`

export const Vtex = styled.img`
  width: 92px;
  height: 58px;
  margin-right: 32px;
`

export const Selo = styled.img`
  width: 54px;
  height: 58px;
`

export const FooterInfosSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ul {
    list-style-type: none;
    margin: 0;
  }
  li {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    line-height: 28px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #202020;
    &:first-child {
      color: #aeb6c1;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  @media only screen and (max-width: 1040px) {
    margin-left: 5%;
    transition: all 0.5s ease-out;
  }
`

export const FooterBar = styled.div`
  background-color: #de8f75;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 175px;
  }
`

export const Text = styled.div`
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: 12px;
    color: #ffffff;
  }
  @media only screen and (max-width: 600px) {
    margin: 20px 15px 10px;
    transition: all 0.5s ease-out;
  }
`

export const Logo = styled.div`
  img {
    width: 111px;
    height: 24.93px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 17px;
    transition: all 0.5s ease-out;
  }
`
export const ContainerNews = styled.div`
  position: relative;
  max-width: 293px;
  width: 100%;
`
export const News = styled.div`
  z-index: 1;
  position: absolute;
  top: -200px;
  left: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 293px;
  height: 293px;
  border: 2px solid #aeb6c1;
  box-sizing: border-box;
  background-color: #fff;
  div {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: #202020;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: rgba(32, 32, 32, 0.5);
    text-align: left;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #aeb6c1;
    margin-bottom: 27px;
    &:focus {
      outline: none;
    }
    color: #202020;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
  @media only screen and (max-width: 1040px) {
    display: none;
    margin: 0;
    transition: all 0.5s ease-out;
  }
`

export const Send = styled.button`
  width: 110px;
  height: 50px;
  background: #de8f75;
  border-radius: 3px;
  border: none;
  p {
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
  }
`

// RESPONSIVE VERSION

export const MobileContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 801px) {
    display: none;
    transition: all 0.5s ease-out;
  }
`

export const MobileNavFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 22px;
`
export const NavMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid rgba(68, 71, 75, 0.4);
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    text-indent: 15px;
    text-transform: uppercase;
    color: #aeb6c1;
    margin-left: 15px;
  }
  p {
    color: #aeb6c1;
    font-size: 20px;
    margin-right: 25px;
  }
`

export const MobileSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`

export const MobileLogoFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 31px;
`

export const MobileSignNews = styled.div``

export const MobileTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #aeb6c1;
`

export const MobileNameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.5);
  }
  input {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #202020;
    border: none;
    border-bottom: 2px solid #aeb6c1;
  }
`

export const MobileEmailBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 38px;
`

export const EmailFill = styled.div`
  input {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #202020;
    border: none;
    border-bottom: 2px solid #aeb6c1;
  }
`

export const Button = styled.button`
  width: 80px;
  height: 40px;
  background: #de8f75;
  border-radius: 3px;
  border: none;
  margin-left: 16px;
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
`
