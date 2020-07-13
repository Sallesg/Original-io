import styled from 'styled-components'

export const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 333px; */
`
export const Line = styled.hr` 
  border: 2px solid #AEB6C1;
  margin-top: 145px;
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 21px;
  margin-left: 71px;
  width: 121px;
  height: 25px;
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

export const SectionFooter = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0 71px 59px;
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
      color: #AEB6C1;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`

export const FooterBar = styled.div`
  background-color: #DE8F75;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`

export const Text = styled.div` 
  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: 12px;
    color: #FFFFFF;
  }
`

export const Logo = styled.div` 

  img {
    width: 111px;
    height: 24.93px;
  }
`
export const ContainerNews = styled.div` 
  position: relative;
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
  border: 2px solid #AEB6C1;
  box-sizing: border-box;
  background-color: #fff;
  div{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  };
  h1{ 
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
    border-bottom: 2px solid #AEB6C1;
    margin-bottom: 27px;
    &:focus{
      outline: none;
    };
    color: #202020;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`

export const Send = styled.button`
  width: 110px;
  height: 50px;
  background: #DE8F75;
  border-radius: 3px;
  border: none;
  p {
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
  }
`