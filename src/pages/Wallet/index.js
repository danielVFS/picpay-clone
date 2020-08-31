import React,{ useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar, Platform } from 'react-native';

import { Wrapper, Header } from './styles';

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

     </Header>
   </Wrapper>
  );
}