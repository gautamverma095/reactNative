import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Quiz from './src/views/QuizScreen/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CandidateDetails from './src/views/CandidateFormScreen/CandidateDetails';
import Result from './src/views/ResultScreen/Result';


const App = () => {
      const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Candidate">
      <Stack.Screen name="Candidate" component={CandidateDetails} />
      <Stack.Screen name ="Quiz"  component={Quiz}/>
      <Stack.Screen name ="Result"  component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
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