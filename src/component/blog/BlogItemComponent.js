import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BlogComponent = ({item, index}) => {
  return (
    <View key={index.toString()} style={styles.blogsItemContainer}>
      <Image source={item.img} style={styles.imgBlog} />
      <Text style={styles.titleBlog}>{item.title}</Text>
      <Text style={styles.dateBlog}>
        <FontAwesome style={styles.iconDate} name="calendar" /> Đến {item.date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blogsItemContainer: {
    width: '48%',
    marginVertical: 10, //StoreScreen.jspadding trái phải
  },

  imgBlog: {
    flex: 1,
    width: 'auto',
    height: 150,
    borderRadius: 5,
  },

  titleBlog: {
    marginTop: 8,
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '500',
  },
  dateBlog: {
    marginTop: 8,
    flex: 1,
    fontSize: 11,
    fontWeight: '300',
  },

  iconDate: {
    fontSize: 14,
  },
});

export default BlogComponent;

//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color
