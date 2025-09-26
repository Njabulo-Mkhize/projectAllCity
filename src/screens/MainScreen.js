// THIS FILE IS NOW IN USE, APP.JS HANDLES NAVIGATION ONLY

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Button } from 'react-native-elements';
import MyStatusbar from '../components/MyStatusbar';
import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const bgImage = require("../assets/mainWallpaper.png");


const MainScreen = () =>{
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={{flex: 1}}>
      {/* header/status bar */}
      <View style={styles.container}>
        <MyStatusbar/>
      </View>
      {/* Map */}
      <View style= {styles.mapArea}>
        <Text style= {{fontSize: 82, alignItems: 'center', justifyContent: 'center', color:'white'}}>Map Area</Text>
      </View>
      {/* Button area */}
      <View style={styles.container2}>
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.wallpaper}>
          <View style={styles.container3}>
            <Button title={"Music"} onPress={()=> navigation.navigate('Music')}/>
            <Button title={"Messages"} onPress={()=> navigation.navigate('Messages')}/>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A4C9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 4,
    backgroundColor: '#c0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  mapArea: {
    flex: 2,
    backgroundColor: '#0D0D40',
    alignItems: 'center',
    justifyContent: 'center',

  },
  wallpaper: {
    flex: 1,
    justifyContent: 'center',
    width: "100%"
  }
});

export default MainScreen;