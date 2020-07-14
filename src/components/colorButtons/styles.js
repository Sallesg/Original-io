import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${({ active }) => (active ? '#DE8F75' : 'transparent')};
  margin: 1px 7.5px;
  :first-child {
    margin: 0 7.5px 1px 0;
  }
  @media (max-width: 768px) {
    margin: 0 4px;
    text-align: center;
  }
`

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid white;
`

export const Inner = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`
