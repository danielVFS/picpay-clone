import React from 'react';

import { Container, Option, Img, Label } from './styles';
import { options } from '../../config/Options';

export default function Sugestions() {
  return (
    <Container >
      {options.map((option) => (
        <Option key={option.key}>
          <Img source={option.img}/>
          <Label>{option.label}</Label>
        </Option>
      ))}
    </Container>
  ); 
}