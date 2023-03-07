import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen';

type obj = {
    route: any,
   
}
const About: React.FC<obj> = (props:obj) => {
      const {ID, Name, nasa_jpl_url, is_potentially_hazardous_asteroid} =
          props.route.params
  return (
    <View style={styles.viewStyle}>
      <Text>
        {' '}
        <Text style={{color: 'blue'}}>ID</Text> {ID}
      </Text>
      <Text>
        {' '}
        <Text style={{color: 'blue'}}>NAME</Text> {Name}
      </Text>
      <Text>
        <Text style={{color: 'blue'}}>NASA JPL URL</Text>
        {nasa_jpl_url}
      </Text>
      <Text>
        <Text style={{color: 'blue'}}> IS POTENTIALLY HAZARDOUS ASTEROID </Text>
        {is_potentially_hazardous_asteroid}
      </Text>
    </View>
  );
};

export default About

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 50,
    width: 350,
    borderColor: 'grey',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 3,
    height: 800,
  },
});