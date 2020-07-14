import styled from 'styled-components'

export const Line = styled.hr`
  border: 2px solid #aeb6c1;
  margin-top: 145px;
`

export const Responsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  height: 229px;
`

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0 71px 59px;
  height: 229px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const IconsColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 21px;
  margin-left: 71px;
  width: 90%;
  @media only screen and (max-width: 768px) {
  }
`

export const Facebook = styled.img`
  width: 12px;
  height: 25px;
`
export const Instagram = styled.img`
  width: 25px;
  height: 25px;
`
export const Pintrest = styled.img`
  width: 24px;
  height: 25px;
`

export const LogosSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
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
  @media only screen and (max-width: 768px) {
    order: -1;
  }
  ul {
    list-style-type: none;
    margin: 0;
    @media only screen and (max-width: 768px) {
      border-bottom: 1px solid #aeb6c1;
    }
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
    @media only screen and (max-width: 768px) {
      display: none;
      &:first-child {
        display: flex;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FooterBar = styled.div`
  background-color: #de8f75;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`

export const Text = styled.div`
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: 12px;
    color: #ffffff;
    @media only screen and (max-width: 768px) {
      text-align: left;
      margin: 15px 15px;
    }
  }
`

export const Logo = styled.div`
  img {
    width: 111px;
    height: 24.93px;
    @media only screen and (max-width: 768px) {
      width: 94px;
      height: 21px;
      margin-bottom: 20px;
    }
  }
`
export const ContainerNews = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const News = styled.div`
  z-index: 1;
  position: absolute;
  top: -200px;
  left: 70px;
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

/** display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  } */
