import * as React from 'react';
import { Container, Outer, Inner } from './styles'

export function ButtonsColors ({color, onClick, active}) {  
    return (  
      <Container onClick={onClick} active={active}>
        <Outer>
          <Inner color={color}/>          
        </Outer>        
      </Container>      
    )
}