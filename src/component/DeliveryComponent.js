import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const img_Delivery = require('../assets/Delivery2.png');
const img_Pickup = require('../assets/Pickup2.png');

const DeliveryComponent = () => {
  return (
      <View style={styles.dailiveryContainer}>
        <View style={styles.giaohangContainer}> 
          <Image source={img_Delivery} style={styles.deliveryImage} />
          <Text style={styles.deliveryText}>Giao hàng</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.giaohangContainer}> 
          <Image source={img_Pickup} style={styles.deliveryImage} />
          <Text style={styles.deliveryText}>Mang đi</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  dailiveryContainer:{
    marginVertical: 10, //StoreScreen.jspadding trái phải
    marginHorizontal: 10,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around", 
    borderColor: "#efefef",
    borderWidth: 2,
    borderRadius: 5,
  },
  deliveryImage:{
    width: 45,
    height: 45,
  },
  giaohangContainer:{
    alignItems: "center",
  },

  deliveryText:{
    fontSize: 13,
    fontWeight: "400",
    color: "#000",
    marginTop: 4,
  },
  line: {
    width: 2,
    backgroundColor: "#efefef",
  },

});

export default DeliveryComponent;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color