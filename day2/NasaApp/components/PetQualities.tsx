import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type PetProps = {
    petName: {
        firstName: string,
        lastName:string
    },
    type:string
};

const PetQualities = (props: PetProps) => {
    
    const {firstName, lastName} = props.petName
  return (
    <View>
      <Text>
        You own a pet name{firstName} {lastName}
      </Text>
      <Text>The pet is a{props.type}</Text>
    </View>
  );
}

export default PetQualities

const styles = StyleSheet.create({})