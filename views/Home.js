import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const App = () => {

  const navigation = useNavigation();

  const baslaHandler = () => {
    navigation.navigate('Camera')
  };
  const infoPageGo = () => {
    navigation.navigate('infoPage')
  };
  return (
    /*   <View style={styles.container}> */
    <ImageBackground source={require('../assets/23.jpg')} style={styles.backgroundImage} resizeMode="contain">

      <TouchableOpacity style={styles.button} onPress={baslaHandler} >
        <Text style={styles.buttonText}>Kamerayı Aç</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button2} onPress={infoPageGo} >
        <Text style={styles.buttonText}>Telefon Bilgileri</Text>
      </TouchableOpacity>
    </ImageBackground>
    /*     </View> */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,

    width: null,
    height: null,
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },

  button: {
    backgroundColor: '#E6F8F0',
    borderColor: '#00B460',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#00B460',
    borderRadius: 12,
    top: '75%'
  },
  button2: {
    backgroundColor: '#E6F8F0',
    borderColor: '#00B460',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#00B460',
    borderRadius: 12,
    top: '85%'
  },
  buttonText: {
    color: '#00B460',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'Center'
  },
});

export default App;