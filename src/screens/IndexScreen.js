import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import GroceriesContext from '../context/GroceriesContext';

const IndexScreen = () => {
  const groceryList = useContext(GroceriesContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={groceryList}
        keyExtractor={(grocery) => grocery.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
