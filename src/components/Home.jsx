import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://api-sal.vercel.app/produtos')
      .then(response => response.json())
      .then(data => setProdutos(data));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imagem }} style={styles.productImage} />
      <Text style={styles.productPrice}>R${item.preco}</Text>
    </View>
  );


  return (
    <FlatList
      data={produtos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    productContainer: {
      flexDirection: 'column',
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      margin: 3,
      elevation: 2,
    },
    productImage: {
      width: 120,
      height: 120,
      resizeMode: 'cover',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    productInfoContainer: {
      flex: 1,
      padding: 16,
    },
    productPrice: {
      fontSize: 16,
      color: '#19A500',
      fontWeight: 'bold',
    },
  });
