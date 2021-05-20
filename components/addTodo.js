import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function addToDo(props){

    const { addItem, item } = props;
    const [text, setText] = useState('');
    console.log({ text });

    useEffect(() => {
        setText(item);
    }, [item])
    
    const changeHandel = val => {
        console.log({ val });
        setText(val);
    }

    const handleAddItem = (text) => {
        if(!text){
            return alert("Vui lòng nhập")
        }
        addItem(text);
        setText('');
    }

    return(
        <View>
            <TextInput
                    value={text}
                    style={styles.input}
                    placeholder='Nhập cái gì đó...'
                    onChangeText={changeHandel}
                />

                <Button title="Thêm" color="coral" onPress={ () => handleAddItem(text) }></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})