import * as React from 'react'
import {ContainerSlide, Arrows, Text} from './styles'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'

export function SlideControl() {
  return (
    <ContainerSlide>
      <Arrows><img src={arrowLeft} alt=""/></Arrows>
        <Text>1 de 3</Text>
      <Arrows><img src={arrowRight} alt=""/></Arrows>      
    </ContainerSlide>
  )
}