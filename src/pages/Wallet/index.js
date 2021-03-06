import React,{ useCallback, useState } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, 
  Value, Bold, EyeButton, Info, Actions, Action, ActionLabel, UseBalance, UseBalanceTitle, 
  PaymentMethods, PaymentMethodsTitle, Card, CardBody, CardDetails, CardTitle, CardInfo,
  CardImg, AddButton, AddLabel, UseTicketButton, UseTicketLabel } from './styles';

import creditCard from '../../assets/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true)

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor('#52e78c');
    }, [])
  );

  function handleToggleVisibile() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);

    StatusBar.setBackgroundColor(useBalance ? '#d3d3d3' : '#52e78c');
  }

  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" backgroundColor="#52E78C"/>
      <Header 
        colors={
          useBalance
          ? ['#52e78c', '#1ab563']
          : ['#d3d3d3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo do PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibile}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#FFF"/>
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

        <Switch 
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de pagamento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <CardImg source={creditCard} resizeMode="contain"/>
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0DB060"/>
            <AddLabel>
              Adicionar cartão de crédito
            </AddLabel>
          </AddButton>
        </Card>

        <UseTicketButton>
          <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060"/>

          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>
   </Wrapper>
  );
}