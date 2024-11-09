// Status bar component for all screens.
    /* To do:
        - incorporate the in-game network, battery and wifi icons and make them reflect the status of the phone.
        - possibly hide the phones status bar.
    */
import React from 'react';
import {View, Text ,StyleSheet} from 'react-native';
import dayjs from 'dayjs'; //Time/date library
import { useEffect, useState } from 'react';


const MyStatusbar= ()=>{
    const [time, setTime] = useState (dayjs());

    useEffect(() => {
        let timer = setInterval(()=>{
            setTime(dayjs());
        }, 1000 *60);
        return () => clearInterval(timer);
    },[]);
    
	return <View style={styles.styler}>
        <Text style={styles.timeStyle}>
            {time.format("HH:mm")}
        </Text>
    </View>
};

const styles= StyleSheet.create({
	styler:{
    flex: 1,
    backgroundColor: '#f9f',
    alignItems: 'center',
    justifyContent: 'center',
	//margin:15
	},
    timeStyle:{
        textAlign: 'center',
        fontSize: 82,
        fontWeight: 'bold'
    }
});

export default MyStatusbar;