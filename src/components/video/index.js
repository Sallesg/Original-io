import * as React from 'react'
import shoesImg from 'assets/shoesImg.png'
import play from 'assets/play.png'
import arrowUp from 'assets/arrowUp.jpg'
import arrowDown from 'assets/arrowDown.jpg'
import {
  VideoWatch,
  ScrollPictures,
  AllImages,
  Container,
  Play,
  Title,
  PlayIcon,
  ArrowUp,
  ArrowDown,
} from './styles'

export function OnVIdeo() {
  return (
    <Container>
      <Title>Video</Title>
      <VideoWatch>
        <img src={shoesImg} alt="Vídeo de sapatos" />
        <Play>
          <PlayIcon>
            <img src={play} alt="Icone do play" />
          </PlayIcon>
        </Play>
      </VideoWatch>
      <ScrollPictures>
        <ArrowUp>
          <img src={arrowUp} alt="Seta para rolar para cima as imagens" />
        </ArrowUp>
        <AllImages>
          <img src={shoesImg} alt="Imagem de sapatos" />
          <img src={shoesImg} alt="Imagem de sapatos" />
          <img src={shoesImg} alt="Imagem de sapatos" />
          <img src={shoesImg} alt="Imagem de sapatos" />
        </AllImages>
        <ArrowDown>
          <img src={arrowDown} alt="Seta para rolar para baixo as imagens" />
        </ArrowDown>
      </ScrollPictures>
    </Container>
  )
}
