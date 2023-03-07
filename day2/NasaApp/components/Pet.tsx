import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type PetType = {
    qualities: {
        qualOne:string,
        qualTwo:string,
        qualThree: string,
        age:number
    }[]
}
const Pet = (props: PetType) => {
  return (
    <View>
          {
              props.qualities.map((el, index) => {
                 
                          if (index == 0)
                      {
                          return (
                           <Text>your pet is{el.qualOne}
                          </Text>
                          )
                        
                          }
              })
     }
    </View>
  );
};

export default Pet

const styles = StyleSheet.create({})