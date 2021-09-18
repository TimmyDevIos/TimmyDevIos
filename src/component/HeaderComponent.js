import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image, Alert} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SayHiComponent from '../component/SayHiComponent';
import IconHeaderComponent from '../component/IconHeaderComponent';


const HeaderComponent = () => {
  return (
    <View>
      <StatusBar translucent barStyle="dark-content"/>
      <View style={styles.headerContainer}>
          <SayHiComponent />
          <IconHeaderComponent />
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
});

export default HeaderComponent;