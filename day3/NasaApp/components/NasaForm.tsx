import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'



const getData = async (id:number) => {
    return fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=kiVUrFpHQerFal6gGwPwpR4NZUDNkoa4vRBQbMhJ`).then(res =>res.json())
   

 
}

const randomData = async () => {
    return fetch(
      'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY',
    ).then((res) =>res.json())
}

type obj = {
    navigation:any
}


const NasaForm: React.FC<obj> = (props:obj) => {
    const [text, setText] = useState<any | null>(null);
    // const [text, setText] = useState<number>(0);

    const [data, setData] = useState({})
    //  console.warn(data);
    const onPress = () => {
        getData(text).then((res) => {
            setData(res)
            // console.warn(res.name);
            props.navigation.navigate(
              'About Astroid',
              {
                ID: `${res.id}`,
                Name: `${res.name}`,
                nasa_jpl_url: `${res.nasa_jpl_url}`,
                is_potentially_hazardous_asteroid: `${res.is_potentially_hazardous_asteroid}`,
              },
            );
            setText(0)
        }).catch((err) => {
          console.log(err);
      })

      
    };
    const handleRandom = () => {
        randomData().then((res) => {
            setText(res.near_earth_objects[Math.floor(Math.random() * 20)].id);
        }).catch((err) => {
            console.warn(err);
        })
    }
  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.input}
        onChangeText={preVal => setText(preVal)}
              value={text}
              keyboardType= "numeric"
        placeholder="Enter asteroid Id"
      />
      <TouchableOpacity style={styles.button} onPress={handleRandom}>
        <Text style={styles.text}>Random Asteroid</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!text}
        style={!text ? styles.disableButton : styles.button}
        onPress={onPress}>
        <Text style={styles.text}>Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NasaForm

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
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    marginTop: 50,
    fontSize: 25,
  },
  text: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    width: 150,
    marginLeft: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  disableButton: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: 150,
    marginLeft: 100,
    borderRadius: 5,
    marginTop: 10,
  },
});




// https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=kiVUrFpHQerFal6gGwPwpR4NZUDNkoa4vRBQbMhJ


//  {ID: `${res.id}`},
//              {Name: `${res.name}`},
//              {nasa_jpl_url: `${res.nasa_jpl_url}`},
//              {
//                is_potentially_hazardous_asteroid: `${res.is_potentially_hazardous_asteroid}`,
//              },