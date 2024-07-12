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
                    source={{ uri: 'https://sosekmektest.a101.com.tr/auth/Auto?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkRlZmF1bHQifQ.eyJqdGkiOiI0YzNmOTMzNC1hZDdmLTRmM2EtYTQ5OC1iNTgwMWJlZGY2ZTUiLCJOYW1lU3VybmFtZSI6IkdKNDV1cklEMmp6U1B6UkZOTmdiUjZMenZSdkd4M2FwWTNwaEo4ZGxCSVk9IiwiUmVnaW9uQ29kZSI6IjMvMnZRQmM5RE5DWHFZMnhRTjluQ0E9PSIsIlN0b3JlQ29kZSI6Im5XM1kyQk40RWhvbDZCTEprNU9BUHc9PSIsIlJlZ2lzdHJhdGlvbk51bWJlciI6IjY4M0tXQ3VJOWNGOHMyb0xrTDU4cnc9PSIsIlJvbGUiOiJlblVHSmtrNzBKN05hT09sOTBkMUpRPT0iLCJJbnRlbmRlZEZvciI6IkRlZmF1bHQiLCJuYmYiOjE3MjA2Nzc2MTUsImV4cCI6MTcyMTI4MjQxNSwiaWF0IjoxNzIwNjc3NjE1LCJpc3MiOiJKV1REZWxpdmVyeU1hbkFncmVlbWVudCIsImF1ZCI6IkpXVERlbGl2ZXJ5TWFuQWdyZWVtZW50In0.7LZOtBtX6Jt565cuXsFA_eMg9FS9FAqYxZsfVXaMhcM' }}
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