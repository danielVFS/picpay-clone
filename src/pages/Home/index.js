import React, { useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { StatusBar, Platform } from 'react-native';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Sugestions from '../../components/Sugestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#000");
    }, [])
  );
 
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>

      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          
          <AntDesign name="gift" size={30} color="#10c86e"/>
        </Header>

        <Sugestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}