import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const GetToDo = (props) => {
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data = {props.todo}
          renderItem = {props.navi}
          keyExtractor={item => item.id+''}
        />
      </SafeAreaView>
    </View>
  );
}

export default GetToDo;
