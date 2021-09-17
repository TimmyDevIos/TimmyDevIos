import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import HomeSectionComponent from '../components/HomeSectionComponents';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Oder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;