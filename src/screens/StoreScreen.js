import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
  Button,
  Alert
} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderStoreComponent from '../component/store/HeaderStoreComponent';
import MapStoreComponent from '../component/store/MapStoreComponent';
import ListStoreComponent from '../component/store/ListStoreComponent';

const Stack = createNativeStackNavigator();
const StoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderStoreComponent navigation={navigation} />
      <Stack.Navigator>
        <Stack.Screen
          name="ListStoreComponent"
          component={ListStoreComponent}
          options={{
            headerShown: false, // ẩn hearder tabbar
          }}
        />
        <Stack.Screen
          name="MapStoreComponent"
          component={MapStoreComponent}
          options={{
            headerShown: false, // ẩn hearder tabbar
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
});

export default StoreScreen;
