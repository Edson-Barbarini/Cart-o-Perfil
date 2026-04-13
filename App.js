// Aluno(os): Edson Fernando e Lucas Volpe

import { View, StyleSheet } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil
        nome="Mateus Redivo"
        profissao="Professor"
        cidade="São Paulo, SP"
        email="mateus.redivo@email.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});