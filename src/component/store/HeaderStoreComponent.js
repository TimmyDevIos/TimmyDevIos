import React,{useState} from 'react';
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

import SayHiComponent from '../SayHiComponent';
import IconHeaderComponent from '../IconHeaderComponent'; 

const MapComponent = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => navigation.replace('ListStoreComponent')}>
      <FontAwesome name="list" style={styles.iconSearch} />
      <Text style={styles.txtIcon}>Danh sách</Text>
    </TouchableOpacity>
  );
};


const RenderBanDo = ({navigation, isListStore, setIsListStore}) => {
  if(isListStore == true){
    return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => 
      {navigation.navigate('MapStoreComponent'),
        setIsListStore(false)
      }
      }>
      <FontAwesome name="map-o" style={styles.iconSearch} />
      <Text style={styles.txtIcon}>Bản đồ</Text>
    </TouchableOpacity>
  );
  }
  else
  {
    return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => 
      {navigation.navigate('ListStoreComponent'),
        setIsListStore(true)
      }
      }>
      <FontAwesome name="list" style={styles.iconSearch} />
      <Text style={styles.txtIcon}>Danh Sách</Text>
    </TouchableOpacity>
  );
  }
};

const HeaderStoreComponent = ({navigation, isListStore, setIsListStore}) => {
  return (
      <View style={styles.headerContainer}>
      <StatusBar translucent barStyle="dark-content" />
        <View style={styles.titleContainer}>
          <Text style={styles.txt_Title}>Cửa Hàng</Text>
          <IconHeaderComponent />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <FontAwesome name="search" style={styles.iconSearch} />
            <TextInput
              style={styles.inputSearch}
              placeholder="Tìm kiếm"
              placeholderTextColor="#626262"
              selectionColor="#FB8E18"
            />
          </View>
          <RenderBanDo navigation={navigation} isListStore={isListStore} setIsListStore={setIsListStore}  />
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    backgroundColor: "#fefefe",
  },

  titleContainer: {
    flexDirection: 'row', // sắp xếp nội dung theo chiều ngan
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchContainer: {
    marginTop: 8,
    flexDirection: 'row', // sắp xếp nội dung theo chiều ngan
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    color: '#626262',
    borderRadius: 8,
    padding: 12,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtIcon: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 13,
    color: '#000',
  },

  iconSearch: {
    fontSize: 15,
  },

  inputSearch: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    color: '#000000',
    borderRadius: 8,
    paddingLeft: 16,
  },

  txt_Title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HeaderStoreComponent;
