import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import GetToDo from './GetToDo';
import ButtonComponent from './ButtonComponent';

export default function ToDo({ navigation })  {
  const [ToDo, setToDo] = useState<Array<string>>([]);
  const [state, setState] = useState(1);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  function handleChange(event, id: number) {
    if (id == 0) {
      setName(event);
    }
    if (id == 1) {
      setDesc(event);
    }
  }

  function handleAdd() {
    if (name) {
      const newList = ToDo.concat({ id: Math.random(), name: name, desc: 'Add a description...', state: state});

      setToDo(newList);
      setName('');
    }
  }

  function handleSave(newObject) {
    var newToDo = [...ToDo];
    var index = newToDo.findIndex(elem => elem.id == newObject.id)

    if (index !== -1) {
      newToDo[index].name = newObject.name;
      newToDo[index].desc = newObject.desc;
      newToDo[index].state = newObject.state;
    }
    setToDo(newToDo)
  }

  function handleDelete(info) {
    var newToDo = [...ToDo];
    var index = newToDo.findIndex(elem => elem.id == info.id);

    if (index !== -1) {
      newToDo.splice(index, 1);
      setToDo(newToDo);
    }
  }

  const getStyle = ({item}) => {
    if (item.state === 1) {
      return {  backgroundColor: 'grey'};
    } else if (item.state === 2) {
      return {  backgroundColor: 'green'};
    } else {
      return {  backgroundColor: 'red'};
    }
  }

  const navigateCell = ({item}) => {
    return (
      <View>
        <View style={styles.todo, getStyle({item})}>
          <Text style={styles.titletodo} onPress = {() => navigation.navigate('Edit', {info: item, onSave: handleSave, onDelete: handleDelete})} >{item.name}</Text>
          <Text>{item.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList</Text>
      <TextInput
        style={styles.tt}
        value={name}
        onChangeText={(title) => handleChange(title, 0)}
      />
      <ButtonComponent title="Ajouter" press={handleAdd}/>
      <Text style={styles.sstitle}>What Needs To Be Done ?</Text>
      { ToDo.length > 0 &&
          <GetToDo todo={ToDo} navi={navigateCell}/>
      }
      { !ToDo.length &&
          <Text>Nothing need to be done</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: '2%',
  },

  sstitle: {
    fontWeight: 'bold',
    marginTop: '2%',
    marginBottom: '1%',
  },

  tt: {
    borderRadius: 14,
    backgroundColor: 'grey',
    marginBottom: '2%',
  },

  todo: {
    backgroundColor: 'red',
    marginBottom: '2%',
  },

  titletodo: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: '1%',
  },
});
