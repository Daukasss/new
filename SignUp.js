import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import LogoAnimation from './LogoAnimation';

export default function SignUp() {
  const navigation = useNavigation(); 
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ska, setSka] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [showPassword,setshowPassword] = useState();
 
  const clickPassword = () => {
    setshowPassword(!showPassword)
  };
  const back = () => {
     navigation.navigate("Login")
  }
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
    if (name === "" || password === "" || ska === "" || email === "") {
      fall = "Please fill in all fields!";
    } else if (password !== repassword) {
      fall = "Passwords do not match!";
    } else if (name.length <= 1 || name.length >= 20) {
      fall = "Please enter a valid name!";
    } else if (!email.includes("@narxoz")) {
      fall = "Please use a corporate email!";
    }else if (!ska.startsWith("S") && !ska.startsWith("F")) {
      fall = "Please enter your S or F!";
    }
    return fall;
  }

  return (
    <SafeAreaView style={styles.main}>
      <LogoAnimation />
      <Text style={styles.maintext}>Sign Up</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Please, enter your full name"
          value={name}
          onChangeText={setName}
        />
        <Image source={require('./assets/person.png')} style={styles.icon} />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Please, enter your e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Image source={require('./assets/person.png')} style={styles.icon} />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Please, enter your S or F"
          value={ska}
          onChangeText={setSka}
        />
        <Image source={require('./assets/person.png')} style={styles.icon} />
       </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Please, create password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={clickPassword}>
        <Image source={require('./assets/passworda.png')} style={[styles.icon, showPassword ? {opacity: 0.5} : null]}  />
      </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Please, confirm password"
          secureTextEntry={!showPassword}
          value={repassword}
          onChangeText={setRepassword}
        />
        <TouchableOpacity onPress={clickPassword}>
        <Image source={require('./assets/passworda.png')} style={[styles.icon, showPassword ? {opacity: 0.5} : null]} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text >Do you have account?</Text>
      <TouchableOpacity>
        <Text style={{marginLeft: 110}} onPress={back}>Sign in</Text>   
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.Text}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 60
  },
  button: {
    width: 300,
    height: 50,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 15,
  },
  Text: {
    color: '#fff'
  },
  maintext: {
    fontSize: 20,
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
    paddingLeft: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});