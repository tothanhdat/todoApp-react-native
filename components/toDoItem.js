import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem({ item, removeItem, updateItem }){
    return (
        <TouchableOpacity 
            onLongPress = {() => { removeItem(item.key)}} 
            onPress = {() => { updateItem(item)}} 
        >
            <Text style={ styles.item }>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
})