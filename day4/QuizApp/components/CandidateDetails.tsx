import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';

type  obj = {
navigation:any
}

const CandidateDetails = (props: obj) => {
  
  const [name,setName] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [lang, setLang] = useState<string>("")
  
  const language = ['English'];

  const handleStart = () => {
    props.navigation.navigate('Quiz', {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: '',
    });
  }


  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Candidate's Details</Text>
      <TextInput
        style={styles.input}
        onChangeText={preVal => setName(preVal)}
        value={name}
        placeholder="Enter Name "
      />
      <TextInput
        style={styles.input}
        onChangeText={preVal => setEmail(preVal)}
        value={email}
        placeholder="Enter Email "
      />

      <TextInput
        style={styles.input}
        onChangeText={preVal => setPhone(preVal)}
        value={phone}
        placeholder="Enter Phone Number"
      />
      <SelectDropdown
        buttonStyle={{
          paddingLeft: 10,
          borderWidth: 2,
          borderColor: 'grey',
          borderRadius: 5,
          marginTop: 40,
          marginRight: 15,
          width: 320,
        }}
        data={language}
        onSelect={(selectedItem, index) => {
          // console.warn(selectedItem);
          setLang(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}

      />
      <TouchableOpacity
        disabled={!lang || !name || !email || !phone}
        style={!lang || !name || !email || !phone
            ? styles.disableButton
            : styles.button
        }
        onPress={handleStart}>
        <Text style={styles.text}>Start Test </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CandidateDetails

const styles = StyleSheet.create({
  selectStyle: {},
  textStyle: {
    textAlign: 'center',
    fontSize: 30,
  },
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
    fontSize: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 10,
    width: 320,
    height: 50,
    marginLeft: 14,
    borderRadius: 5,
    marginTop: 30,
  },
  disableButton: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: 320,
    height: 50,
    marginLeft: 14,
    borderRadius: 5,
    marginTop: 30,
  },
});
