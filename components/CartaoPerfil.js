// Aluno(os): Edson Fernando e Lucas Volpe

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CartaoPerfil({ nome, profissao, cidade, email }) {

  const enviarEmail = () => {
    Alert.alert(`E-mail enviado para: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: 250,
    alignItems: 'center',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profissao: {
    fontSize: 16,
    color: '#555',
  },
  cidade: {
    fontSize: 14,
    color: '#777',
  },
  email: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});