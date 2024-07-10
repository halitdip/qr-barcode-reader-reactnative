import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import { useNavigation } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('myDatabase.db');

const DeviceInfo = () => {

  const [storedText, setStoredText] = useState([]);

  const fetchText = async () => {
    const allRows = await db.getAllAsync('SELECT * FROM test');
    setStoredText(JSON.stringify(allRows))

    for (const row of allRows) {
      console.log(row.id, row.value, row.intValue);
    }

  };

  fetchText()
  const [deviceInfo, setDeviceInfo] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    const getDeviceInfo = async () => {
      const info = {
        deviceId: Device.osBuildId,
        marka: Device.brand,
        model: Device.modelName,
        işletimSistemi: Device.osName,
        işletimSistemiSürümü: Device.osVersion,
        işletimSistemiYapiKimliği: Device.osBuildId,
        toplamBellek: Number(Device.totalMemory / 1000000),
        desteklenenCpuMimarileri: Device.supportedCpuArchitectures,
        cihazAdi: Device.deviceName,
        fizikselCihaz: Device.isDevice,
        üretici: Device.manufacturer,
        tasarimAdi: Device.designName,
        ürünAdi: Device.productName,
        toplamDiskKapasitesi: Device.totalDiskCapacity,
        tablet: Device.isTablet,
        içYapiKimliği: Device.osInternalBuildId,
      };

      setDeviceInfo(info);
    };

    getDeviceInfo();
  }, []);



  const gofileupload = () => {
    navigation.navigate('fileUpload')
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
          

      {Object.entries(deviceInfo).map(([key, value]) => (
        <Text style={styles.text} key={key}>
          {key}: {Array.isArray(value) ? value.join(', ') : value}
        </Text>
      ))}


      <TouchableOpacity onPress={gofileupload} style={{ marginTop: 30, backgroundColor: 'red', padding: 10 }} >
        <Text style={styles.text}>Dosya İşlemleri</Text>
      </TouchableOpacity>
      {storedText ? <Text style={styles.storedText}>{storedText}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  storedText: {
    marginTop: 16,
    fontSize: 16,
},
});

export default DeviceInfo;