import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// home screens

import BuyersPost from './HomeScreens/BuyersPost';
import MyPost from './HomeScreens/MyPost';

const TopTab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <>
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
        <TopTab.Screen
          name="BuyersPost"
          component={BuyersPost}
          options={{title: 'Buyers Post'}}
        />
        <TopTab.Screen
          name="MyPost"
          component={MyPost}
          options={{title: 'My Post'}}
        />
      </TopTab.Navigator>
    </>
  );
};

export default Home;
