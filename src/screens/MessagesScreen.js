import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';

const bgImage = require("../src/assets/mainWallpaper.png");

const MessagesScreen = () =>{
    <SafeAreaView>
        <View>
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.wallpaper}>
        </ImageBackground>
      </View>
    </SafeAreaView>
}