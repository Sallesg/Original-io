import styled from 'styled-components'

export const Container = styled.header`
  height: 136px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`

export const LogoWrapper = styled.div`
  height: 86px;
  margin-top: 26px;
`

export const Menu = styled.div`
  height: 50px;
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #CCCCCC;
  border-bottom: 1px solid #CCCCCC;
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
  width: 754px;
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
  p{
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
