import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 19px;
  @media only screen and (max-width: 1100px) {
    margin-left: 10%;
    transition: all 0.5s ease-out;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const Title = styled.h1`
  width: 82px;
  font-style: normal;
  font-weight: normal;
  height: 28px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #de8f75;
  opacity: 0.8;
`

export const VideoWatch = styled.div`
  img {
    width: 82px;
    height: 45px;
  }
  position: relative;
`
export const Play = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
`

export const PlayIcon = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  img {
    width: 35px;
    height: 34.17px;
    margin-top: 6.42px;
  }
`

export const ScrollPictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82px;
  height: 556px;
`

export const ArrowUp = styled.div`
  width: 15.51px;
  height: 8.64px;
  margin: 10.35px 0 21px 0;
  cursor: pointer;
`

export const AllImages = styled.div`
  max-width: 82px;
  width: 100%;
  img {
    margin-bottom: 9.3px;
    opacity: 0.7;
  }
  img:first-child {
    opacity: 1;
  }
`

export const ArrowDown = styled.div`
  width: 15.51px;
  height: 8.64px;
  margin: 20.45px 0 21px 0;
  cursor: pointer;
`
