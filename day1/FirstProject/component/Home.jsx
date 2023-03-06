import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ route, navigation }) => {
  const { myName } = route.params
  
  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View>
      <Text>Welcome {myName}</Text>
      <Button onPress={handleBack} title='go back'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})