import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const navigation = useNavigation();

  const handleLogin = () => {
    axios.post("http://localhost:9081/login", { email, senha })
    .then((response) => {
      if (response.data.success){
        login();
      } else {
        Alert.alert("Erro", "Email ou senha incorretos");
      }
    })
    .catch((error) => {
      console.log(error);
      Alert.alert("Erro", "Erro ao fazer login");
    });
  };

 const renderlogin = ()=>(
  <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
 )

  return (
    <>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.containerRow2}>
        <MaterialCommunityIcons name="arrow-left" size={29} color="black" />
      </TouchableOpacity>
      {renderlogin()}
    </>
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  containerRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
  },
});
