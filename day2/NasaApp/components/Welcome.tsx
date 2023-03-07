import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type WelcomeProps = {
    name: string,
    age: number,
    gender:boolean
}

const Welcome = (props:WelcomeProps) => {
  return (
    <View>
          <Text>Hello { props.name}!</Text>
          <Text>You are { props.age}</Text>
          <Text>You are a { props.gender ? "Men" :"Woman"}</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})