import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens

import Home from './screens/Home';
import Buyers from './screens/Buyers';
import Orders from './screens/Orders';
import Payment from './screens/Payment';
import Profile from './screens/Profile';

// icons
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// create the tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="#355F43" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Orders"
          screenOptions={({route}) => ({
            headerStyle: {
              backgroundColor: '#355F43',
            },

            headerTitleStyle: {
              color: 'white',
              fontFamily: 'Poppins-Regular',
            },

            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return <Entypo name="home" size={size} color={color} />;
              } else if (route.name === 'Buyers') {
                return <Feather name="users" size={size} color={color} />;
              } else if (route.name === 'Orders') {
                return <Feather name="trello" size={size} color={color} />;
              } else if (route.name === 'Payment') {
                return (
                  <MaterialIcons name="payment" size={size} color={color} />
                );
              } else if (route.name === 'Profile') {
                return <Feather name="user" size={size} color={color} />;
              }
            },

            tabBarInactiveTintColor: '#9D9D9D',
            tabBarActiveTintColor: '#4A7357',
            tabBarLabelStyle: {
              fontFamily: 'DMSans-Regular',
            },
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{title: 'Home', headerTitle: 'Order Post'}}
          />

          <Tab.Screen
            name="Buyers"
            component={Buyers}
            options={{title: 'Buyers'}}
          />

          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{title: 'Orders', headerTitle: 'Order Details'}}
          />

          <Tab.Screen
            name="Payment"
            component={Payment}
            options={{title: 'Payment'}}
          />

          <Tab.Screen
            name="Profile"
            component={() => <Profile name="Anup Prajapati" />}
            options={{title: 'Profile', headerTitle: 'My Profile'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
