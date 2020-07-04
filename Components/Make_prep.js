import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FlatGrid } from 'react-native-super-grid';
import { Icon } from 'react-native-elements'
 

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'FOOTBALL', code: '#1abc9c', image: require('../images/foot.png') },
    { name: 'BASKET', code: '#2ecc71', image: require('../images/basketball.png') },
    { name: 'HANDBALL', code: '#3498db', image: require('../images/handball.png') },
    { name: 'RUGBY', code: '#9b59b6', image: require('../images/foot.png') },
    { name: 'GYM', code: '#34495e', image: require('../images/gym.png') },
    { name: 'TENNIS', code: '#27ae60',image: require('../images/tennis.png') },
  ]);
 
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <ImageBackground source={item.image} style={styles.image}>
                <Text style={styles.itemName}>{item.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    color: 'black',
    fontWeight: "bold"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});