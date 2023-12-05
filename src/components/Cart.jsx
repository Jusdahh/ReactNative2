import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../contexts/CartContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cart() {
  const { cart } = useCart();
  const { removeFromCart } = useCart();
  const { clearCart } = useCart();

  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carrinho</Text>
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
      </View>
    );
  }

  const handleRemoveFromCart = (product) => {
    removeFromCart(product.id);
    alert('Produto removido do carrinho!');
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.containerRow}>
      <Text style={styles.itemPrice}>R${item.price}</Text>
      <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
        <MaterialCommunityIcons name="cart-remove" style={{fontSize: 26, padding: 12, borderRadius: 10, color:"#000"}} />
    </TouchableOpacity>
    </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
      <Text style={styles.title}>Carrinho</Text>
      <TouchableOpacity onPress={() => clearCart()}>
        <MaterialCommunityIcons name="delete" style={{fontSize: 26, padding: 12, borderRadius: 10, backgroundColor: "lightgray"}} />
      </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 16,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
    marginTop: 16,
  },
});
