import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Quiz from './src/views/QuizScreen/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CandidateDetails from './src/views/CandidateFormScreen/Index';
import Result from './src/views/ResultScreen/Index';
import AllRoutes from './src/components/Routes/AllRoutes';


const App = () => {
      const Stack = createNativeStackNavigator();
  return (
   <AllRoutes/>
  );
}


export default App

const styles = StyleSheet.create({
  safeStyle: {
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 100,
  },
  textStyle: {
    fontSize: 30,
    textAlign:"center"
  }

});