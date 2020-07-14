import * as React from 'react'
import { SelectSize, Text } from './styles'

export function SelectSizeContainer({ children, chooseSize, onClick, active }) {
  return (
    <SelectSize onClick={onClick} active={active}>
      <Text chooseSize={chooseSize} active={active}>
        {children}
      </Text>
    </SelectSize>
  )
}
