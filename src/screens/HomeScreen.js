import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../component/HeaderComponent';
import HomeBodyComponent from '../component/HomeBodyComponent';



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
    <HeaderComponent />
    <ScrollView showsVerticalScrollIndicator={false} >
    <HomeBodyComponent />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fdf7e7',
  },

});

export default HomeScreen;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color