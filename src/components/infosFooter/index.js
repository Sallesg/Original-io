import React from 'react'
import {
  InfosContainerFooter,
  TitleInfoBox,
  MoreInfoButton,
  ListInfoFooter,
  NavMobile,
} from './styles'

export function InfosFooter() {
  const [infoOpen, setInfoOpen] = React.useState(false)

  const institutional = ['A marca', 'Lojas', 'Contato']
  const information = [
    'Fomas de Pagamentos',
    'Trocas e Devoluções',
    'Cuidados com o Produto',
  ]
  const know = ['Franquias e Multimarcas', 'Trabalhe com a Gente', 'Procon-RJ']

  const handleInfoClick = () => {
    return setInfoOpen(!infoOpen)
  }

  return (
    <>
      <InfosContainerFooter>
        <NavMobile>
          <TitleInfoBox>
            <MoreInfoButton onClick={handleInfoClick}>
              Institucional
            </MoreInfoButton>
            <p onClick={handleInfoClick}>+</p>
          </TitleInfoBox>
          {infoOpen && (
            <ListInfoFooter>
              {institutional.map((category) => (
                <li>{category}</li>
              ))}
            </ListInfoFooter>
          )}
        </NavMobile>
        <NavMobile>
          <TitleInfoBox>
            <MoreInfoButton onClick={handleInfoClick}>
              Informações
            </MoreInfoButton>
            <p onClick={handleInfoClick}>+</p>
          </TitleInfoBox>
          {infoOpen && (
            <ListInfoFooter>
              {information.map((category) => (
                <li>{category}</li>
              ))}
            </ListInfoFooter>
          )}
        </NavMobile>
        <NavMobile>
          <TitleInfoBox>
            <MoreInfoButton onClick={handleInfoClick}>Conheça</MoreInfoButton>
            <p onClick={handleInfoClick}>+</p>
          </TitleInfoBox>
          {infoOpen && (
            <ListInfoFooter>
              {know.map((category) => (
                <li>{category}</li>
              ))}
            </ListInfoFooter>
          )}
        </NavMobile>
      </InfosContainerFooter>
    </>
  )
}
