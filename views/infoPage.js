import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import * as Device from 'expo-device';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    const getDeviceInfo = async () => {
      const info = {
        marka: Device.brand,
        model: Device.modelName,
        işletimSistemi: Device.osName,
        işletimSistemiSürümü: Device.osVersion,
        işletimSistemiYapiKimliği: Device.osBuildId,
        toplamBellek: Number(Device.totalMemory/1000000),
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
  console.log(Device)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(deviceInfo).map(([key, value]) => (
        <Text style={styles.text} key={key}>
          {key}: {Array.isArray(value) ? value.join(', ') : value}
        </Text>
      ))}
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
});

export default DeviceInfo;