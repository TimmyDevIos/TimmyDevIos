import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeaderComponent = () => {
  return (
    <View>
      <StatusBar translucent barStyle="dark-content"/>
      <View style={styles.headerContainer}>
        <View style={styles.loichaoContainer} >
          <Text style={styles.txt_LoiChao}>
            Chào buổi tối, Thịnh
          </Text>
        </View>

        <View style={styles.iconContainer} >
          <View style={styles.iconVoucherContainer} >
            <FontAwesome style={styles.iconVoucher} name="credit-card" size={18} color="#FB8E18"  />
            <Text style={styles.textVoucher}> 4 </Text>
          </View>
          <View style={styles.iconThongBaoContainer} >
            <FontAwesome style={styles.iconThongBao} name="bell-o" size={18} color="#000"  />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    paddingHorizontal: 16,
    flexDirection: "row",// sắp xếp nội dung theo chiều ngan
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
  },
  loichaoContainer:{

  },
  txt_LoiChao:{
    fontWeight: "600",
  },
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

export default HeaderComponent;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color