import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image, Alert} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const sangIcon = require('../assets/icons/sangIcon.png');
const truaIcon = require('../assets/icons/truaIcon.png');
const chieuIcon = require('../assets/icons/chieuIcon.png');
const toiIcon = require('../assets/icons/toiIcon.png');



const SayHi = ({icon, sayHi}) => {
  return (
    <View style={styles.loichaoContainer} >
          <Image source={icon} style={styles.iconSayHi} />
          <Text style={styles.txt_LoiChao}>
            {sayHi}, Thịnh
          </Text>
        </View>
  );
};

const getCurrentDate=()=>{
 
      var hours = new Date().getHours();
      var min = new Date().getMinutes();
      return hours;//format: dd-mm-yyyy;
}

const setSayHi=()=>{

    switch(true) {
 
      case (getCurrentDate()>=5) && (getCurrentDate()<= 11):
         return <SayHi icon={sangIcon} sayHi={"Chào buổi sáng"} />;
        break;

      case (getCurrentDate()>=12) && (getCurrentDate()<= 15):
         return <SayHi icon={truaIcon} sayHi={"Chào buổi trưa"} />;
        break;

      case (getCurrentDate()>=16) && (getCurrentDate()<= 18):
         return <SayHi icon={chieuIcon} sayHi={"Chào buổi chiều"} />;
        break;
      default:
         return <SayHi icon={toiIcon} sayHi={"Chào buổi tối"} />;
      }
  }



// Alert.alert(checkSwitch());

const SayHiComponent = () => {
  return (
    setSayHi()
  );
};

const styles = StyleSheet.create({
  loichaoContainer:{
    flexDirection: "row",
    alignItems: "center",
  },
  txt_LoiChao:{
    fontWeight: "600",
    marginLeft: 8,
  },
  iconSayHi:{
     width: 25,
     height: 25,
  },
});

export default SayHiComponent;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color