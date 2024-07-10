import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('myDatabase.db');
console.log(db)
const App = () => {
    const [inputText, setInputText] = useState('');
    const [storedText, setStoredText] = useState([]);

    useEffect(() => {
        db.execAsync(`
        
        CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
        INSERT INTO test (value, intValue) VALUES ('test1', 123);
        `)
    }, []);

    const saveText = async () => {

        await db.runAsync(`
          INSERT INTO test (value, intValue) VALUES ('${inputText}', 123);
        `)
    };

    const fetchText = async () => {
        const allRows = await db.getAllAsync('SELECT * FROM test');
        setStoredText(JSON.stringify(allRows))


    };
    const deleteText = async () => {
        await db.getAllAsync('DELETE FROM test');
        setStoredText([])
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter some text"
                value={inputText}
                onChangeText={setInputText}
            />
            <Button title="Kayıt Et" onPress={saveText} />
            <Button title="Veri Getir" onPress={fetchText} />
            <Button title="Sil" onPress={deleteText} />

            {/*  <Text style={styles.storedText}>{allRows}</Text> */}
            {storedText ? <Text style={styles.storedText}>{storedText}</Text> : null}

           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
    storedText: {
        marginTop: 16,
        fontSize: 16,
    },
});

export default App;