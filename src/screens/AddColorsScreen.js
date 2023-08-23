import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { color } from "react-native-reanimated";

const AddColorsScreen = () => {
  const [colors, setColors] = useState([]);

//   console.log("colors", colors);

  let randomColor;
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);

  randomColor = `rgb(${color1}, ${color2}, ${color3})`;

  const renderColorBoxList = () => {
    return (
      <View>
        <FlatList
        keyExtractor={(item) => item}
          data={colors}
          renderItem={(item) => {
            console.log(item);
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: item.item,
                }}
              />
            );
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <Button
        onPress={() => setColors([...colors, randomColor])}
        title="Add Color"
      />
      {renderColorBoxList()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddColorsScreen;
