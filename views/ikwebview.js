import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet,Platform,SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
    const [loading, setLoading] = useState(true); // Yükleme durumu

    const webViewLoaded = () => {
        setLoading(false); // WebView yüklendiğinde loading durumunu false yap
    };


    return (
        <SafeAreaView style={styles.container}>
           

                <WebView
                    source={{ uri: 'https://101iktest.a101.com.tr/auto?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNGFiMWM3MC1lNzExLTRmNTktOTkwZC00NmVjN2Q3NWQ5Y2EiLCJVc2VyTmFtZSI6ImhqT1dKV0hMSnhHV0ZzZXlkUm1kSEE9PSIsInJvbGVzIjoiNE5BeHJabG94Wlc3M0gwU1VzR01XWnYwOG83S250YmpzTzNvYnJNcnEvRT0iLCJSZWdpb25Db2RlIjoiTEpkUE1kSTJXRHZ1ZjNKUWFLdkxIZz09IiwiVGl0bGUiOiJqc2FURGhuWUg2MGpOWGdXTE5qdnd3PT0iLCJSZWdpc3RyYXRpb25OdW1iZXIiOiJzNU1BRFNVR1J3RjNMdS9kZEFUVW53PT0iLCJlTWFpbCI6Imswb3dXYXN1YzhTaExzbkxVa1IyZUJOS1cxbHlGeHJ3S2hmaG5CMnZMTlU9IiwiUm9sZUlkIjoiUWprWENXbmdCQUZ5TGc2NTkrQUJDZz09IiwibmJmIjoxNzIwNjEyMjkzLCJleHAiOjE3MjA2MTgyOTMsImlhdCI6MTcyMDYxMjI5MywiaXNzIjoiMTAxRGlnaXRhbEhyIiwiYXVkIjoiMTAxRGlnaXRhbEhyIn0.76c5Z3t688hUHsjLW9ukXW4gjz5Pb9G6_9j8NKm4rB8' }}
                    style={styles.webview}
                    onLoad={webViewLoaded}
                />

                {loading && (
                    <View style={styles.loadingContainer}>

                        <ActivityIndicator size="large" color="#0000ff" style={{ zIndex: 99999 }} />
                    </View>
                )}


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae6df',
        paddingTop: Platform.OS == "android" ? 40 : 0
    },
    loadingContainer: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    webview: {
        flex: 1,
    },
    closeButtonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});

export default App;