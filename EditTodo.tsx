import React, { useState} from 'react';
import { StyleSheet, Text, Switch, View, TextInput, Button } from 'react-native';

import ButtonComponent from './ButtonComponent';

export default function EditTodo({ route, navigation}) {
    const {info, onSave, onDelete} = route.params;
    const [name, setName] = useState(info.name);
    const [desc, setDesc] = useState(info.desc);
    const [state, setState] = useState(info.state)

    const handleFinish = () => (
      setState(2)
    );

    const handleNotFinish = () => (
      setState(3)
    );

    const handleSwitch = () => (
        setState(previousState => !previousState)
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleinput}
                value={name}
                onChangeText={(title) => setName(title)}
            />
            <TextInput
                style={styles.descinput}
                value={desc}
                onChangeText={(desc) => setDesc(desc)}
            />
            <View style={styles.switch}>
              <ButtonComponent title="Not Finish" press={handleNotFinish}/>
              <ButtonComponent title="Finish" press={handleFinish}/>
            </View>
            <View style={styles.buttons}>
              <ButtonComponent title="Save" press={() => {
                  onSave({id: info.id, name: name, desc: desc, state: state});
                  navigation.navigate('ToDo');
                }}
              />
              <ButtonComponent  title="Delete" press={() => {
                  onDelete(info);
                  navigation.navigate('ToDo');
                }}
              />
            </View>
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

    titleinput: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: '2%',
        borderRadius: 14,
        backgroundColor: 'grey',
    },

    descinput: {
        borderRadius: 4,
        backgroundColor: 'grey',
        marginBottom: '2%',
    },

    buttons: {
       flexDirection: 'row',
    },

    switch: {
        flexDirection: 'row',
        marginBottom: '2%',
    }
});
