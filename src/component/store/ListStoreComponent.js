import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListStoreComponent = ({navigation}) => {
  return (
      <View>
        <Text> List Store </Text>
      </View>
  );
};

export default ListStoreComponent;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
  },
});


