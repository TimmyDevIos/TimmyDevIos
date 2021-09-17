import React from 'react';
import {StyleSheet, SafeAreaView , View, Text, StatusBar, ScrollView, Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const blog_1 = require('../assets/blogs/APP-NEWS-2.jpeg');


const BlogComponent = () => {
  return (
      <View style={styles.bodyBlogContainer}>
        <Text style={styles.blogTitle}>Khám phá thêm</Text>

        <View style={styles.blogsContainer}>
            <View style={styles.blogsItemContainer}>
                <Image source={blog_1} style={styles.imgBlog} />
                <Text style={styles.titleBlog}>Ưu đãi tháng 9 cho cà phê đúng gu</Text>
                <Text style={styles.dateBlog}><FontAwesome style={styles.iconDate} name="calendar" />  Đến 02/09</Text>
            </View>
            <View style={styles.blogsItemContainer}>
                <Image source={blog_1} style={styles.imgBlog} />
                <Text style={styles.titleBlog}>Ưu đãi tháng 9 cho cà phê đúng gu</Text>
                <Text style={styles.dateBlog}><FontAwesome style={styles.iconDate} name="calendar" />  Đến 02/09</Text>
            </View>
            <View style={styles.blogsItemContainer}>
                <Image source={blog_1} style={styles.imgBlog} />
                <Text style={styles.titleBlog}>Ưu đãi tháng 9 cho cà phê đúng gu</Text>
                <Text style={styles.dateBlog}><FontAwesome style={styles.iconDate} name="calendar" />  Đến 02/09</Text>
            </View>
            <View style={styles.blogsItemContainer}>
                <Image source={blog_1} style={styles.imgBlog} />
                <Text style={styles.titleBlog}>Ưu đãi tháng 9 cho cà phê đúng gu</Text>
                <Text style={styles.dateBlog}><FontAwesome style={styles.iconDate} name="calendar" />  Đến 02/09</Text>
            </View>
        </View>

        
      </View>
  );
};

const styles = StyleSheet.create({
  bodyBlogContainer:{
    marginVertical: 10, //StoreScreen.jspadding trái phải
    marginHorizontal: 10,
  },

  blogTitle:{
      fontSize: 16,
      fontWeight: "600",
        marginHorizontal: 5,
  },

  blogsContainer:{
      flex: 1, 
      flexDirection: "row", 
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "space-between",
  },

  blogsItemContainer:{
      width: "48%",
      marginVertical: 10, //StoreScreen.jspadding trái phải

  },

  imgBlog:{
      flex: 1,
      width: "auto",
      height: 150,
      borderRadius: 5,
  },

  titleBlog:{
      marginTop: 8,
      flex: 1,
      flexWrap: "wrap",
      fontSize: 14,
      fontWeight: "500",
  },
dateBlog:{
    marginTop: 8,
    flex: 1,
    fontSize: 11,
      fontWeight: "300",
},

iconDate:{
  fontSize: 14,
}

});

export default BlogComponent;


//color
// #fdf7e7 Status Bar color
// #FB8E18 The coffee house color