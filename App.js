import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CartProvider} from './src/contexts/CartContext';
import {ProductProvider} from './src/contexts/ProductsContext';
import { AuthProvider } from './src/contexts/AuthContext';

import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Profile from './src/components/Profile';
import Product from './src/components/Product';
import Login from './src/components/Login';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function Tabs() {
  return (
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
        name="CartTab"
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
  );
}

export default function App() {
  // const isFocused = useIsFocused();
  return (
    <NavigationContainer>
      <CartProvider>
        <ProductProvider>
          <AuthProvider>
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="Principal" component={Tabs} />
            <stack.Screen name="Produto" component={Product} />
            <stack.Screen name="Login" component={Login} />
          </stack.Navigator>
          </AuthProvider>
        </ProductProvider>
      </CartProvider>
    </NavigationContainer>
  );
}
