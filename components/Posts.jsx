import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet,Image} from 'react-native';
import { postStyle } from '../styles/componentSyles';

const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://ceddit.onrender.com/api/posts/');
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
        console.log(data)
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const renderPostItem = ({ item }) => (
    <View style={postStyle.postContainer}>
      <Text style={postStyle.postTitle}>{item.title}</Text>
      <Text style={postStyle.postTitle}>{item.content}</Text>
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={postStyle.postImage} />
      )}
    </View>
  );

  return (
    <View style={postStyle.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => String(item._id)}
          renderItem={renderPostItem}
        />
      )}
    </View>
  );
};


export default Post;
