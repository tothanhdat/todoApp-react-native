import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Dimensions } from "react-native";

import Header from  "./components/header";
import TodoItem from  "./components/toDoItem";
import AddToDo from  "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    
    { text: "buy coffe", key: "1" },
    { text: "create an app", key: "2" },
    { text: "finish or done app", key: "3" },
  ]);

  const [nameJob, setNameJob] = useState('');

  const removeItem = key => {
    setTodos((prevTodos) => {
      alert("Xóa thành công");
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const addItem = text => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos ]
    })
  }

  const updateItem = item => {
    setNameJob(item.text)
  }
  
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* Component Add Todo */}
        <AddToDo item={nameJob} addItem={addItem}/>
        <View style={styles.list}>
        {/* Component List Todo */}
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} removeItem={removeItem} updateItem={updateItem} />
            )}
          />
        </View>

      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40
  },
  list:{
    height: Dimensions.get('window').height / 2,
    marginTop: 20
  }

});
