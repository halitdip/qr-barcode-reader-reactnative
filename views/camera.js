import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Modal, SafeAreaView, Platform, TouchableOpacity, ScrollView,Dimensions } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    let [qrs, setQrs] = useState([]);
    const [barcodeData, setBarcodeData] = useState([]);
    const [qrread, setQrread] = useState('');



    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");

        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = async (onBarcodeScanningResult) => {

        if(Platform.OS == "android")
            setBarcodeData(onBarcodeScanningResult.boundingBox);
        else {
            setBarcodeData(onBarcodeScanningResult.bounds);
            console.log(onBarcodeScanningResult.bounds)
        }


        await setQrread(onBarcodeScanningResult.data)
        if (!qrs.includes(onBarcodeScanningResult.data)) {
            setQrs(oldArray => [...oldArray, onBarcodeScanningResult.data]);
        }

    };


    if (hasPermission === null) {
        return <SafeAreaView style={styles.container}><Text>Requesting for camera permission</Text></SafeAreaView>;
    }
    if (hasPermission === false) {
        return <SafeAreaView style={styles.container}><Text>No access to camera</Text></SafeAreaView>;
    }
    const openModal = () => {
        setModalVisible(true);
        setScanned(false)

    };

    const closeModal = () => {
        setModalVisible(false);
        setScanned(true)
    };
    const windowWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cameraContainer}>

                <CameraView
                    onBarcodeScanned={!scanned ? null : handleBarCodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "code128"]
                    }}
                    style={styles.absoluteFillObject}
                >

                    {barcodeData && barcodeData.origin && barcodeData.size && qrread && (
                        <View
                            style={[
                                styles.boundingBox,
                                {

                                    height: Platform.OS == "android" ? Number(barcodeData.size.width) : Number(barcodeData.size.height),
                                    width:  Platform.OS == "android" ? Number(barcodeData.size.height) : Number(barcodeData.size.width),
                                    right: Platform.OS == "android" ? Number(barcodeData.origin.y) :  (windowWidth  - Number(barcodeData.origin.x) ) - (Platform.OS == "android" ? Number(barcodeData.size.height) : Number(barcodeData.size.width)  ),
                                    top: Platform.OS == "android" ? Number(barcodeData.origin.x) : Number(barcodeData.origin.y),
                                },
                            ]}
                        >
                            {/* <Text style={{ textAlign: 'center', backgroundColor: 'green' }}>
                                {qrread}
                            </Text> */}
                        </View>

                    )}
                </CameraView>

            </View>
            {/*  {scanned && (
                    <Button title={"Tekrar Oku"} onPress={() => setScanned(false)} />
                )} */}



            <View style={styles.buttonContainer}>
                <View>


                    <TouchableOpacity style={styles.btn1} onPress={qrs.length ? openModal : undefined}>
                        <Text style={{ color: '#00B460' }}>Doğru Fiyatlar</Text>
                        <Text style={{ color: '#00B460' }}>({qrs.length})</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.btn2} >
                        <Text style={{ color: '#F64F49' }}>Yanlış Fiyatlar</Text>
                        <Text style={{ color: '#F64F49' }}>({qrs.length})</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            >

                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={{ height: 150 }}>


                            <ScrollView contentContainerStyle={{ width: 250, display: 'flex', alignItems: 'center' }} >
                                {Array.from({ length: qrs.length }).map((_, index) => (
                                    <View key={index} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                        <Text style={{ color: '#00B460' }}>{qrs[index]}</Text>

                                        {index + 1 !== qrs.length && (
                                            <View
                                                style={{
                                                    borderBottomColor: '#00B460',
                                                    borderBottomWidth: 1,
                                                    width: '100%',
                                                    marginTop: 10
                                                }}
                                            />
                                        )}

                                    </View>
                                ))}

                            </ScrollView>
                        </View>
                        <View style={styles.kapatbutton}>
                            <Button title="Kapat" onPress={closeModal} />
                        </View>
                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae6df',
        paddingTop: Platform.OS == "android" ? 50 : 0

    },
    cameraContainer: {

    },
    absoluteFillObject: {
        height: 450,
        alignSelf: 'stretch',
        position: 'relative'
    },

    btn1: {
        backgroundColor: '#E6F8F0',
        height: '100%',
        display: 'flex',
        borderWidth: 1,
        borderColor: '#00B460',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        width: 120,
    },
    btn2: {
        marginRight: 30,
        height: '100%',
        backgroundColor: '#FDDCDB',
        borderWidth: 1,
        borderColor: '#F64F49',
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        color: 'white'
    },
    buttonContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginTop: 30

    },


    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalView: {
        width: 300,
        height: 250,
        overflow: 'scroll',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',

    },
    kapatbutton: {
        marginTop: 30,
        position: 'absolute',
        bottom: 10
    },
    boundingBox: {
        position: 'absolute',
        borderColor: 'green',
        borderWidth: 2,
        zIndex: 1,
    },
});