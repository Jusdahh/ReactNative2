import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Profile from './src/components/Profile';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Cart') {
    iconName = focused ? 'cart' : 'cart-outline';
  }

  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

export default function App() {
  // const isFocused = useIsFocused();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Carrinho',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cart" size={24} color="black" />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Perfil',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={24} color="black" />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
