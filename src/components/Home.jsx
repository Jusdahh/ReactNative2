import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductsContext';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { products, loading } = useProducts();

  const goToProduct = (product) => {
    navigation.navigate('Produto', { productId: product.id });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => goToProduct(item)}>
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Preço: R${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Loja do Coisa</Text>
        <Text style={styles.headerDescription}>Descriçãozinha da Loja dos cara</Text>
      </View>
      <View style={styles.productsContainer}>
        <Text style={styles.productsTitle}>Produtos</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    color: '#191919',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  headerDescription: {
    fontSize: 16,
    color: '#191919',
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 10,
  },
  productsContainer: {
    flex: 1,
  },
  productsTitle: {
    fontSize: 22,
    color: '#e72c03',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 12,
  },
  productImage: {
    width: "100%",
    height: 550,
    borderRadius: 8,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    color: '#191919',
    fontWeight: '500',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#191919',
    fontWeight: '400',
  },
});
