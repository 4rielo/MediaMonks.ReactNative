import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 

import AlbumsList from './src/screens/albums/AlbumList';
import PhotosList from './src/screens/photos/PhotosList';

const Tab = createMaterialTopTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Albums" component={AlbumsList} />
      <Tab.Screen name="Photos" component={PhotosList} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>       
      <TabScreen />
    </NavigationContainer>
  )
}


