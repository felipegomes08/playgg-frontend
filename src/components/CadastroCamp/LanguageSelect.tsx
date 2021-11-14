import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'
import * as React from 'react'

export const LanguageSelect = (props: SelectProps) => (
  <FormControl id="language">
    <FormLabel>Modalidade</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>Presencial</option>
      <option>Online</option>
    </Select>
  </FormControl>
)
