import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { title, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        {description}
      </Text>

      <Button
        title='Adicionar ao Carrinho'
        onPress={() => console.log(`${title} adicionado ao carrinho!`)}
      />

      <Button
        title='Voltar'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default DetailsScreen;
