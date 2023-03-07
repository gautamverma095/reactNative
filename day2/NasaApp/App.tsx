import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './components/Welcome';
import PetQualities from './components/PetQualities';

const App = () => {

  const petName = {
    firstName: "Roger",
    lastName:"Portious"
  }

  return (
    <View
      style={styles.viewStyle}>
      <Welcome name="Gautam Verma" age={28} gender={true} />
      <PetQualities type='Dragon' petName={petName}/>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});