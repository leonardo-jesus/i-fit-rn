import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const bowlCaloricoImage = require('../assets/images/bowlCalorico.jpg');
const frangoSaladaImage = require('../assets/images/saladaFrango.jpg');
const marmitaSaudavelImage = require('../assets/images/marmitaSaudavel.jpg');
const saladaVariadaImage = require('../assets/images/saladaVariada.jpg');

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.paddingContainer}>
          <SearchBar />
          <Text style={styles.sectionTitle}>Mais Pedidos</Text>

          <CategoryCard
            title={'Bowl Calorico'}
            image={bowlCaloricoImage}
            onPress={() => navigation.navigate('Details', { title: 'Bowl Calórico', description: 'O Bowl Calórico é uma refeição nutritiva e saborosa, perfeita para quem busca energia e saciedade. Com uma base de arroz integral, peito de frango grelhado, vegetais frescos e batatas-doces assadas, este prato é finalizado com guacamole e molho de iogurte grego. Uma combinação equilibrada de proteínas, fibras e carboidratos para manter você energizado e satisfeito ao longo do dia.' })}
          />
          <CategoryCard
            title={'Salada de Frango'}
            image={frangoSaladaImage}
            onPress={() => navigation.navigate('Details', { title: 'Frango Com Salada', description: 'Refresque-se com nossa Salada de Frango, uma opção leve e deliciosa. Composta por frango grelhado desfiado, folhas verdes crocantes, tomates cereja, pepino e abacate, é acompanhada de um molho leve à base de iogurte. Ideal para uma refeição saudável e cheia de sabor.' })}
          />
          <CategoryCard
            title={'Marmita Saudável'}
            image={marmitaSaudavelImage}
            onPress={() => navigation.navigate('Details', { title: 'Marmita Saudável', description: 'Nossa Marmita Saudável é a escolha perfeita para quem busca praticidade e nutrição. Combinando arroz integral, legumes frescos, peito de frango grelhado e uma porção de quinoa, é uma refeição balanceada e cheia de sabor. Ideal para uma dieta equilibrada e nutritiva.' })}
          />
          <CategoryCard

            title={'Salada Variada'}
            image={saladaVariadaImage}
            onPress={() => navigation.navigate('Details', { title: 'Salada Variada', description: 'Nossa Salada Variada é um prato refrescante e nutritivo, com uma mistura colorida de folhas verdes, tomates, pepinos, cenouras e abacate. Coberta com uma leve vinagrete de limão, é perfeita para quem busca uma refeição leve e cheia de vitaminas.' })}
          />

        </View>
      </ScrollView>
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>I-Fit</Text>
    </View>
  );
};

const SearchBar = () => {
  return <Text style={styles.searchBar}>Search Bar</Text>;
};

const CategoryCard = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#388e3c',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  paddingContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 8,
  },
  searchBar: {
    fontSize: 18,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderColor: '#388e3c',
    borderWidth: 1,
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388e3c',
    padding: 10,
  },
});

export default Menu;
