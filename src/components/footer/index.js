import * as React from 'react'
import '../../GlobalStyles.css'
import {
  MainFooter, 
  Line, 
  SocialMedia, 
  Facebook, 
  Pintrest, 
  Instagram, 
  SectionFooter, 
  LogosSection, 
  Vtex, 
  Selo, 
  FooterInfosSection, 
  FooterBar, 
  Text, 
  Logo, 
  News,
  Send, 
  ContainerNews
} from './style'
import logo from '../../assets/logoFooter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import pintrest from '../../assets/pintrest.png'
import vtex from '../../assets/vtex-pci-200.png'
import selo from '../../assets/selo-ebit.png'

export function Footer() {
  const footerCategories = ['Institucional', 'A marca', 'Lojas', 'Contato'];
  const footerCategoriesInfos = ['Informações', 'Fomas de Pagamentos', 'Trocas e Devoluções', 'Cuidados com o Produto'];
  const footerCategoriesKnow = ['Conheça', 'Franquias e Multimarcas', 'Trabalhe com a Gente', 'Procon-RJ'];

  return (
    <>
    <Line/>
    <SocialMedia>
        <Facebook src={facebook} alt=""/>
        <Instagram src={instagram} alt=""/>
        <Pintrest src={pintrest} alt=""/>
      </SocialMedia> 
    <MainFooter>       
      <SectionFooter>
        <LogosSection>
          <Vtex src={vtex} alt=""/>
          <Selo src={selo} alt=""/>
        </LogosSection> 
        <FooterInfosSection>
          <ul>
            {footerCategories.map((footerCategory) => (
              <li>{footerCategory}</li>
            ))}
          </ul>
          <ul>
            {footerCategoriesInfos.map((footerCategoryInfos) => (
              <li>{footerCategoryInfos}</li>
            ))}
          </ul>
          <ul>
            {footerCategoriesKnow.map((footerCategoryKnow) => (
              <li>{footerCategoryKnow}</li>
            ))}
          </ul>
        </FooterInfosSection> 
        <ContainerNews>
        <News>
          <h1>Assine Nossa News</h1>  
            <div>      
              <span>Nome</span>
              <input type='Text' placeholder='nome'/>
              <input type="e-mail" placeholder='E-mail' /> 
            </div>          
          <Send><p>Enviar</p></Send>   
        </News>
      </ContainerNews>  
      </SectionFooter>       
    </MainFooter>
    <FooterBar>
      <Text> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maecenas molestie massa in nunc condimentum, vei placerat <br/>
          lacus pulvina. Suspendisse vei nisl eu tortor feugiat tempus vei in tortor. Nunc semper leo nec tellus gravida faucibus.
        </p>
      </Text>
      <Logo>
        <img src={logo} alt=""/>
      </Logo>    
    </FooterBar>
    </>
  )
}