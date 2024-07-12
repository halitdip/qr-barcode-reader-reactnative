// In App.js in a new project expo install expo-font

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/Home';
import Camera from './views/camera'
import infoPage from './views/infoPage'
import fileUpload from './views/fileUpload'
import ikwebview from './views/ikwebview'
import sqlite from './views/sqlite'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}} > 
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="infoPage" component={infoPage}  />
        <Stack.Screen name="Camera" component={Camera}  />
        <Stack.Screen name="fileUpload" component={fileUpload}  />
        <Stack.Screen name="ikwebview" component={ikwebview}  />
        <Stack.Screen name="sqlite" component={sqlite}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;