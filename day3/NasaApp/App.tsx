import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NasaForm from './components/NasaForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './components/About';



const App = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={NasaForm} />
      <Stack.Screen name="About Astroid" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
};

export default App;

const styles = StyleSheet.create({});
