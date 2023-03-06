import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';





export default function Login({navigation}) {
    const  [email,setEmail] = useState("")
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        if (email !== "" && password != "")
        {
            alert("Login Successfull")
            navigation.navigate("Home",{myName:`${email}`})
            setEmail("")
              setPassword('');
        }
        else {
            alert('Input fields cannot be empty');
        }
    
}
  return (
    <SafeAreaView>
      <Text>Login Form</Text>

      <TextInput
        onChangeText={preValue => setEmail(preValue)}
        style={styles.inputStyle}
        placeholder="Enter userName"
        value={email}
      />
          <TextInput
        onChangeText={preValue => setPassword(preValue)}
        secureTextEntry={true}
        style={styles.inputStyle}
        placeholder="Enter password"
        value={password}
      />
      <Button onPress={onSubmit} title="Login" style={styles.buttonStyle} />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 30,
    borderColor: 'red',
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
});

