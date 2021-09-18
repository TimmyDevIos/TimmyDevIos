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
import BlogItemComponent from './BlogItemComponent';
import {dataBlog} from '../../data/dataBlog';

const BlogComponent = () => {
  return (
    <View style={styles.bodyBlogContainer}>
      <Text style={styles.blogTitle}>Khám phá thêm</Text>
        <View style={styles.blogsContainer}>
        {
          dataBlog.map((item, index) => (
            <BlogItemComponent item={item} index={index} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyBlogContainer: {
    marginVertical: 10, //StoreScreen.jspadding trái phải
    marginHorizontal: 10,
  },

  blogTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 5,
  },

  blogsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default BlogComponent;

//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color
