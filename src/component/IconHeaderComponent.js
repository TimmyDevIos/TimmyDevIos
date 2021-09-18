
import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image, Alert} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IconHeaderComponent = () => {
  return (
    <View style={styles.iconContainer} >
          <View style={styles.iconVoucherContainer} >
            <FontAwesome style={styles.iconVoucher} name="credit-card" size={18} color="#FB8E18"  />
            <Text style={styles.textVoucher}> 4 </Text>
          </View>
          <View style={styles.iconThongBaoContainer} >
            <FontAwesome style={styles.iconThongBao} name="bell-o" size={18} color="#000"  />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  iconContainer:{
    flexDirection: "row",
  },
  iconVoucherContainer:{
    flexDirection: "row",
    backgroundColor: "#fdfdfd",
    paddingVertical: 8, //padding trên dưới
    paddingHorizontal: 10, //StoreScreen.jspadding trái phải
    borderRadius: 30,
    alignItems: "center",

    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.1,
    elevation: 4,

  },
  iconVoucher:{
  },
  textVoucher:{
    paddingLeft: 8,
    fontWeight: "600",
  },
  iconThongBaoContainer:{
    marginLeft: 8,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
    paddingVertical: 8, //padding trên dưới
    paddingHorizontal: 8, //StoreScreen.jspadding trái phải
    borderRadius: 30,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.1,
    elevation: 4,
  },
  iconThongBao:{

  },
});

export default IconHeaderComponent;
