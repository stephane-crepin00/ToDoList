import React from 'react';
import { View, Button } from 'react-native';

const ButtonComponent = (props) => {
  return (
    <View>
      <Button
          title={props.title}
          onPress = {props.press}
      />
    </View>
  );
}

export default ButtonComponent;
