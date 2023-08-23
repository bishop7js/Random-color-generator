import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const data = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
  { id: "5", text: "Item 5" },
];

const ListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});
export default ListScreen;
