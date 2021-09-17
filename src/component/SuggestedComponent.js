import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const img_CaPheSua = require('../assets/caphe_suada_bacsiu_400x400.jpeg');

const SuggestedComponent = () => {
  return (
      <View style={styles.suggestedContainer}>
        <Text style={styles.suggestedTitle}>Gợi ý riêng cho Thịnh:</Text>
        <View style={styles.productContainer}> 
          <Image source={img_CaPheSua} style={styles.imgProduct} />
          <View style={styles.titleProductContainer}> 
            <Text style={{ fontSize: 13, fontWeight: "500", color: "#666", }}>Đặt gần đây <FontAwesome name="clock-o" size={16} /></Text>
            <Text style={{fontSize: 14, fontWeight: "600", paddingTop: 8, }}>Cà Phê Sữa Đá</Text>
          </View>
          <View style={styles.priceProductContainer}>
            <Text style={styles.txtPriceProductContainer}>32.000đ</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  suggestedContainer:{
    marginVertical: 10, //StoreScreen.jspadding trái phải
    marginHorizontal: 10,
    padding: 16,
    justifyContent: "space-around", 
    borderColor: "#efefef",
    borderWidth: 2,
    borderRadius: 5,
  },

 
  productContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  suggestedTitle:{
    paddingBottom: 16,
    fontSize: 16,
    fontWeight: "600"
  },

  imgProduct:{
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  titleProductContainer:{},
  priceProductContainer:{
    backgroundColor: '#FB8E18',
    paddingVertical: 10, //padding trên dưới
    paddingHorizontal: 16, //StoreScreen.jspadding trái phải
    borderRadius: 18,
  },
  txtPriceProductContainer:{
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  }
});

export default SuggestedComponent;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color