import React,{ useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, 
  Value, Bold, EyeButton, Info, Actions, Action, ActionLabel, UseBalance, UseBalanceTitle } from './styles';

export default function Wallet() {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#52E78C");
    }, [])
  );
  
  return (
   <Wrapper>
     <StatusBar barStyle="dark-content" backgroundColor="#52E78C"/>
     <Header colors={['#52e78c', '#1ab563']}>
        <HeaderContainer>
          <Title>Saldo do PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>

            <EyeButton>
              <Feather name="eye" size={28} color="#FFF"/>
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 15$ do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={30} color="#FFF"/>
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#FFF"/>
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
     </Header>

     <UseBalance>
       <UseBalanceTitle>
          Usar saldo ao pagar
       </UseBalanceTitle>

       <Switch />
     </UseBalance>
   </Wrapper>
  );
}