import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllRoutes from './src/components/Routes/AllRoutes';


const App = () => {

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