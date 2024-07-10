// In App.js in a new project expo install expo-font

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/Home';
import Camera from './views/camera'
import infoPage from './views/infoPage'
import fileUpload from './views/fileUpload'
import ikwebview from './views/ikwebview'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen"  > 
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="infoPage" component={infoPage} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name="fileUpload" component={fileUpload} options={{ headerShown: false }} />
        <Stack.Screen name="ikwebview" component={ikwebview} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;