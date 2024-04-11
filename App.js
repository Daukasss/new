import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Login from './login';
import LogoAnimation from './LogoAnimation';
import Logo from './logotip';
import SignUp from './SignUp';
import main1 from './mainpart/main1';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Logo" component={Logo} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name="main1" component={main1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({ navigation }) {
  const click = () => navigation.navigate('Login');
  const click2 = () => navigation.navigate('SignUp');
  return (
    <SafeAreaView style={styles.dev}>
      <LogoAnimation />
      <Text style={styles.text}>Get ready to sign in app.</Text>
      <TouchableOpacity style={styles.button1} onPress={click}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.inlineContainer}>
        <Image source={require('./assets/person.png')} style={styles.icon} />
        <Text style={styles.text1}>Do not have an account?</Text>
        <TouchableOpacity style={styles.button2} onPress={(click2)}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dev: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button1: {
    color: 'white',
    width: 300, 
    height: 50,
    paddingVertical: 10, 
    backgroundColor: 'red',    
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center', 
    textAlign: 'center', 
    textAlignVertical: 'center',
    marginBottom: 10,
  },
  button2: {
    color: '#000000',
    backgroundColor: '#e3e8e6',
    borderRadius: 7,
    borderColor: '#e3e8e6',
    borderWidth: 1,
    width: 100,
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',  
    textAlignVertical: 'center',
    marginLeft: 0
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 20
  },
  text1: {
    marginRight: 15
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff'
  }
});