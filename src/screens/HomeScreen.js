import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {

  const renderButtonField = () => {
    return (
      <View>
        <Button title="Home Screen" onPress={() => props.navigation.push('Home')} />
        <Button title="Menu Screen" onPress={() => props.navigation.push('Menu')} />
        <Button title="List Screen" onPress={() => props.navigation.push('List')} />
        <Button title="Colors Screen" onPress={() => props.navigation.push('Colors')} />
      </View>
    );
  }

  return (
    <View>
      {renderButtonField()}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
