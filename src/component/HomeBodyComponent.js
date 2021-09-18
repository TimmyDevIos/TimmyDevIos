import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DeliveryComponent from '../component/DeliveryComponent';

import Carousel from '../component/Carousel/Carousel';
import { dummyData } from '../data/data';

import SuggestedComponent from '../component/SuggestedComponent';
import BlogComponent from '../component/blog/BlogComponent';

const HomeBodyComponent = () => {
  return (
    <View style={styles.bodyContainer}>
      <DeliveryComponent />
      <Carousel data = {dummyData} />
      <SuggestedComponent />
      <BlogComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fefefe',
  },


  suggestedContainer:{},

});

export default HomeBodyComponent;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color