import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IButton extends TouchableOpacityProps {
  text: string;
}

const AppButton = ({text, onPress}: IButton) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: Platform.OS === 'web' ? '40%' : '70%',
    borderRadius: 10,
    backgroundColor: '#222',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
});

export default AppButton;
