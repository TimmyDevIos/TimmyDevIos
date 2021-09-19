import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();

import HeaderStoreComponent from '../component/store/HeaderStoreComponent';
import ListStoreComponent from '../component/store/ListStoreComponent';
import MapStoreComponent from '../component/store/MapStoreComponent';

const StoreScreen = ({navigation, route}) => {
    const [isListStore, setIsListStore] = React.useState(true)
  return (
    <SafeAreaView style={styles.screenContainer}>
      
      <HeaderStoreComponent navigation={navigation} isListStore={isListStore} setIsListStore={setIsListStore}  />
      <Stack.Navigator initialRouteName="initialRouteName">
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
    backgroundColor: '#fdf7e7',
  },
});

export default StoreScreen;
