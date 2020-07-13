import * as React from 'react'
import mainImage from '../../assets/shoesBigImg.jpg'
import {ImageComponent} from './styles'

export function MainImage() {
  return (
    <ImageComponent>
     <img src={mainImage} alt="Imagem principal"/>
    </ImageComponent>
  )
}