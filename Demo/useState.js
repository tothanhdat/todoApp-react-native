import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DemoUseState() {
  const [name, setName] = useState("To Dat");
  const [person, setPerson] = useState({ age: 18, name: "Phan Van De" });

  const clickUpdateState = () => {
      setName("Khanh Ney");
      setPerson({ age: 24, name: "Luc De" })
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello {name}</Text>
        <Text style={styles.text}>Hello {person.name} tuổi {person.age}</Text>
        <View style={styles.button}>
            <Button title="Update state" onPress={ clickUpdateState } />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "black"
  },

  button: {
    marginTop: 20
  }

});
