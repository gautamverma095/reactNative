import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

type typeProp = {
  type: any;
};
const Type = ({type}: typeProp) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{type.type}</Text>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  viewStyle: {
    width: width,
    backgroundColor: 'grey',
    height: 500,
  },
  textStyle: {
    textAlign: 'center',
    height: 60,
    fontSize: 35,
  },
});
