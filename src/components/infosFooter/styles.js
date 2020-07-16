import styled from 'styled-components'

export const InfosContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NavMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  padding-right: 35px;
  border-bottom: 1px solid rgba(68, 71, 75, 0.4);
`

export const TitleInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  p {
    color: #aeb6c1;
    font-size: 25px;
  }
`

export const ListInfoFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 60px;
  margin-left: 35px;
  li {
    list-style-type: none;
    color: #de8f75;
    font-size: 10px;
    height: 150px;
  }
`
export const MoreInfoButton = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 12px;
  height: 12px;
  border: none;
  background: transparent;
  color: #aeb6c1;
  font-size: 14px;
  text-align: center;
  line-height: 23px;
  text-indent: 15px;
  text-transform: uppercase;
`
