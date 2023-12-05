import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
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
      <View>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
        <Text style={styles.texto}>{item.title}</Text>
        <Text style={styles.texto}>Preço: R${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.geral}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <View style={styles.subcontainer}>
          <Text style={styles.titulo}>Loja do Coisa</Text>
          <Text style={styles.texto}>Descriçãozinha da Loja dos cara</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.titulo}>Produtos</Text>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList showsVerticalScrollIndicator={false}
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
  geral: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subcontainer: {
    marginBottom: 20,
    padding: 16,
  },
  titulo: {
    fontSize: 26,
    color: '#000',
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 10,
  },
});
