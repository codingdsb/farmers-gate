import React from 'react';
import {Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import OrderCard from './OrderCard';
import PaymentCard from './PaymentCard';

const TopTab = createMaterialTopTabNavigator();

const OrderNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#355F43',
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontFamily: 'DMSans-Bold',
          fontSize: 18,
        },
        tabBarIndicatorStyle: {backgroundColor: 'black'},
      }}>
      <TopTab.Screen name="OrderCard" component={OrderCard} />
      <TopTab.Screen name="PaymentCard" component={PaymentCard} />
    </TopTab.Navigator>
  );
};

export default OrderNavigation;
