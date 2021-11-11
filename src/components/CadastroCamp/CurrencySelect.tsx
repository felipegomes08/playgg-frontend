import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'
import * as React from 'react'

export const CurrencySelect = (props: SelectProps) => (
  <FormControl id="currency">
    <FormLabel>Quantidade de Times</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>10 times</option>
      <option>15 times</option>
      <option>20 times</option>
    </Select>
  </FormControl>
)
