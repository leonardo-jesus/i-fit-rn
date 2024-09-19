import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.replace('Login');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.content}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>I-Fit</Text>
        <View style={styles.spacer} />
        <Text style={styles.subtitle}>Touch to continue</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(39, 174, 96)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(24, 131, 69)',
    marginTop: 20,
  },
  spacer: {
    height: 200,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(24, 131, 69)',
  },
});

export default SplashScreen;
