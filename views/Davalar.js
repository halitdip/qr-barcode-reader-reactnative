import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});



const LotsOfGreetings = () => {
  const navigation = useNavigation();
  const baslaHandler = () => {
    console.log('Oyun Başladı!');
    navigation.navigate('Camera')
  };
  return (
    <View style={[styles.center, { top: 50 }]}>
      <TouchableOpacity style={styles.button} onPress={baslaHandler} >
        <Text style={styles.buttonText}>Hadi Başlayalım !</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LotsOfGreetings;