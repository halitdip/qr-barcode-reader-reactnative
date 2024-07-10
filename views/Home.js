import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';



const App = () => {

  const navigation = useNavigation();

  const baslaHandler = () => {
    navigation.navigate('Camera')
  };
  const infoPageGo = () => {

    navigation.navigate('infoPage')
  };
  const ikiframePageGo = () => {

    navigation.navigate('ikwebview')
  };
  const sqlgo = () => {

    navigation.navigate('sqlite')
  };
  
  const createSVFile = async () => {
    const content = generateSVContent();
    const filePath = `${FileSystem.documentDirectory}test1.sv`;
    try {
      await FileSystem.writeAsStringAsync(filePath, content);
      alert(`SV dosyası oluşturuldu: ${filePath}`);
    } catch (error) {
      console.error('SV dosyası oluşturulurken hata oluştu:', error);
    }
  };

  const generateSVContent = () => {
    let content = '';
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 3; j++) {
        content += `Column${j}-Row${i}\t`;
      }
      content += '\n';
    }
    return content;
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


      <TouchableOpacity style={styles.button5} onPress={sqlgo} >
        <Text style={styles.buttonText}>sql işlemleri</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button4} onPress={ikiframePageGo} >
        <Text style={styles.buttonText}>101 ik</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={createSVFile} >
        <Text style={styles.buttonText}>Sv Dosyası Oluştur !</Text>
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
    top: '15%'
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
    top: '8%'
  },

  button3: {
    backgroundColor: '#E6F8F0',
    borderColor: '#00B460',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#00B460',
    borderRadius: 12,
    top: '90%'
  },
  button4: {
    backgroundColor: '#E6F8F0',
    borderColor: '#00B460',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#00B460',
    borderRadius: 12,
    top: '80%'
  },

  button5: {
    backgroundColor: '#E6F8F0',
    borderColor: '#00B460',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#00B460',
    borderRadius: 12,
    top: '73%'
  },
  buttonText: {
    color: '#00B460',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'Center'
  },
});

export default App;