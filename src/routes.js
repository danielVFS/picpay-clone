import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen 
        name="Pay" 
        component={Pay}
        options={{
          title: 'Pagar',
        }}
      />
      <Tab.Screen 
        name="Notifications" 
        component={Pay}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Pay}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}

