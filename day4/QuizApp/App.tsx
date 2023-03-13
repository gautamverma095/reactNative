import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Quiz from './components/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CandidateDetails from './components/CandidateDetails';


const App = () => {
      const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Candidate" component={CandidateDetails} />
      <Stack.Screen name ="Quiz"  component={Quiz}/>
{/* 
        <Quiz
          question={''}
          option1={''}
          option2={''}
          option3={''}
          option4={''}
          correct={''}
        /> */}
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