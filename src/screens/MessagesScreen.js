import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import MyStatusbar from "../components/MyStatusbar";
const bgImage = require("../assets/mainWallpaper.png");

const MessagesScreen = () =>{
  return(
    <SafeAreaView style={{flex: 1}}>
      {/* header/status bar */}
      
        <MyStatusbar/>
     
      {/* Map */}
      <View style= {styles.mapArea}>
        <Text style= {styles.title}>
            This is the Messages Screen
            </Text>
      </View>
      {/* Button area */}
      {/* <View style={styles.container2}>
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.wallpaper}>
          <View style={styles.container3}><Button title={"Hello"}></Button></View>
        </ImageBackground>
      </View> */}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  title:{
        fontSize:82,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'

    },
    mapArea: {
      flex: 2,
      backgroundColor: '#0D0D40',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    container: {
    flex: 1,
    backgroundColor: '#3A4C9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MessagesScreen;