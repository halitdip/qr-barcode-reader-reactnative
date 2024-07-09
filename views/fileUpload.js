import React, { useState, useEffect } from 'react';
import { View, Button, Text,Alert  } from 'react-native';
import * as FileSystem from 'expo-file-system';

const App = () => {
    const [svData, setSvData] = useState([]);
    const [svFileExists, setSvFileExists] = useState(false);
    const filePath = `${FileSystem.documentDirectory}test1.sv`;

    const readSVFile = async () => {
      
        try {
            const svContent = await FileSystem.readAsStringAsync(filePath);
            const svDataArray = parseSVContent(svContent);
            setSvData(svDataArray);
            setSvFileExists(true);
        } catch (error) {
            console.log(error)
            alert('SV dosyası okunurken hata oluştu:  Dosya Bulunamadı !', error);
        }
    };

    const parseSVContent = (svContent) => {
        const rows = svContent.trim().split('\n');
        const dataArray = rows.map((row) => {
            return row.split('\t');
        });
        return dataArray;
    };


    const deleteSVFile = async () => {
        try {
            await FileSystem.deleteAsync(filePath);
            console.log('SV dosyası silindi');
            setSvFileExists(false);
            setSvData([])
        } catch (error) {
            console.error('SV dosyası silinirken hata oluştu:', error);
        }
    };
    const handleDeleteSVFile = () => {
        Alert.alert(
            'SV Dosyasını Sil',
            'SV dosyasını silmek istediğinizden emin misiniz?',
            [
                {
                    text: 'İptal',
                    onPress: () => console.log('İptal edildi'),
                    style: 'cancel',
                },
                { text: 'Evet', onPress: () => deleteSVFile() },
            ],
            { cancelable: false }
        );
    };

    <Button title="SV Dosyasını Sil" onPress={handleDeleteSVFile} />

    const handleReadSVFile = () => {
        readSVFile();
    };

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        {
            svFileExists && (
                <Button title="SV Dosyasını Sil" onPress={handleDeleteSVFile} />

            )
        }
        {
            !svFileExists && (
                <Button title="SV Dosyasını Oku" onPress={handleReadSVFile} style={{ paddingTop: 30 }} />
            )
        }
           
            <Text style={{ marginTop: 20 }}>SV Veri:</Text>

            {svData.map((rowData, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', marginBottom: 10 }}>
                    {rowData.map((cellData, cellIndex) => (
                        <Text key={cellIndex} style={{ paddingHorizontal: 10 }}>{cellData}</Text>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default App;