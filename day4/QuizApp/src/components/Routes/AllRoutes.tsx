import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Result from '../../screens/CandidateFormScreen/ResultScreen/Index';
import Quiz from '../../screens/CandidateFormScreen/QuizScreen/Index';
import CandidateDetails from '../../screens/CandidateFormScreen/Index';

const AllRoutes = () => {
      const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Candidate">
        <Stack.Screen name="Candidate" component={CandidateDetails} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllRoutes;

const styles = StyleSheet.create({});
