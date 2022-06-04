/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  Component,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name = "Home"/>
        <Stack.Screen component={Profile} name = "Profile"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({navigation}) => {
  return (
  <SafeAreaView style={{
    flex: 1, justifyContent:'center', alignItems: 'center'
  }}>
    <View>
    <Text style = {{fontWeight:'bold', fontSize:25, color:'black' }}>Profile</Text>
    </View>
    <View>
      <Image source={{uri:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'}}
      style={{width:300,
      height:300,
      marginBottom:100,
      marginTop:150,
      borderRadius:10}}/>
    </View>
    <TouchableOpacity
    onPress={() => navigation.navigate('Profile')}>
      <Text style={{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
        backgroundColor:'blue',
        width:350 ,
        padding:20,
        borderRadius :10,
        justifyContent : 'space-between'
      }}>Visit profile</Text>
    </TouchableOpacity>
  </SafeAreaView>

  );
};

const Profile = () => {
  return(
    <View>
    <View style ={styles.upperSection}>
      <Image source={{uri:'https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhY2tlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'}}
      style={styles.img}/>
    </View>
    <View style={styles.bottomSection}>
    <Text style={styles.name}>Teja Ganesh</Text>
    <Text style={styles.edu}>B.Tech</Text>
    <Text style={styles.des}>I'm a hard-working engineering graduate pursuing information technology in 
      bachelors of Technology. Currently in react native development course to explore the knowledge in react
      native
    </Text>
    <View>
      <TouchableOpacity style={{borderWidth:5, borderRadius:10, padding:20, marginTop: 28,paddingLeft:50,paddingRight:50,
      borderColor:'blue'}}>
        <Text style={{color:'black'}}>Like</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  upperSection: {
    width: deviceWidth,
    height: deviceHeight/4,
    backgroundColor:'pink'
  },
  bottomSection: {
    width: deviceWidth,
    height: 3*(deviceHeight/4),
    alignItems: 'center',
  },
  img: {
    width:150,
    height:150,
    borderRadius: 100,
    marginTop: 100,
    marginLeft: 120,
  },
  name: {
    marginTop: 70,
    fontSize: 25,
    color:'black',
  },
 edu:{
   fontSize:20,
   color:'black',
 }, 
 des: {
   marginTop:20,
   paddingLeft: 20,
   paddingRight:20,
   fontSize: 22,
   textAlign: 'justify',
 }
 });

export default App;
