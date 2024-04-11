import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoAnimation from './LogoAnimation';
import { CheckBox } from 'react-native-elements';

export default function Login({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false); 

  const [showPassword,setshowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleLogin = () => {
    const error = checkform();
    if (error) {
      setErrorMessage(error);
    } else {
      navigation.navigate('main1');
    }
  };

  function checkform() {
    var fall = "";
    if ( password === "" || email === "") {
      fall = "Please fill in all fields!";
    } else if (!email.startsWith("S") && !email.startsWith("F")) {
      fall = "Please use a S or F!";
    }
    return fall;
  }

  const handleRememberMe = () => {
    setRememberMe(!rememberMe); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <LogoAnimation />
      <Text style={styles.text}>Please log in to your account</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <View style={styles.input}>
        <TextInput style={styles.inputText} placeholder="Please, enter your S or F" 
        value={email}
        onChangeText={setEmail}
        />

        <Image source={require('./assets/person.png')} style={styles.icon} />
      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputText} placeholder="Please, enter your password"
          secureTextEntry={!showPassword} 
          value={password}
          onChangeText={setPassword}/>
        <TouchableOpacity onPress ={clickPassword}>
        <Image 
        source={require('./assets/passworda.png')} style={[styles.icon, showPassword ? {opacity: 0.5}: null]} />
        </TouchableOpacity>
      
      </View>
      <View style={styles.forgot}>
        <CheckBox
          title="Remember me"
          checked={rememberMe}
          onPress={handleRememberMe}
          containerStyle={styles.checkboxContainer} 
          textStyle={styles.checkboxText} 
        />
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.lost}>Lost your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 90,
  },
  icon: {
    width: 24, 
    height: 24,
    marginRight: 10,
    alignSelf: 'center'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3e8e6',
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e3e8e6',
    marginTop: 15,
    marginBottom: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  },
  forgot: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  button1: {
    color: 'white',
    height: 50,
    width: 300,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    fontSize: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff'
  },
  checkboxContainer: {
    backgroundColor: '#fff',
    borderWidth: 0, 
    marginLeft: -15, 
  },
  checkboxText: {
    fontSize: 16,
  },
  lost: {
    marginTop:18
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
