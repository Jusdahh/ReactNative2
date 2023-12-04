import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function Profile({ navigation }) {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const goToLogin = () => {
    navigation.navigate('Login'); // Navega para a tela de login
  };

  if (!isAuthenticated) {
    // Se o usuário não estiver autenticado, redirecione para a tela de login
    return(
      <Button title="Login" onPress={goToLogin}></Button>
    ); // Evite a renderização do restante do componente
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Text style={styles.text}>Nome: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});
