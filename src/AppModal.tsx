import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IModal {
  onClose: () => void;
}
const AppModal = (props: IModal) => {
  return (
    <Modal
      animationType="fade"
      visible={true}
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={props.onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.popupContainer}>
          <Text style={styles.text}>This is a React Native Modal</Text>
          <TouchableOpacity style={styles.btn} onPress={props.onClose}>
            <Text style={styles.btnText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
  },
  popupContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontStyle: 'normal',
    color: 'black',
    textAlign: 'center',
  },
  btn: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#222',
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
});

export default AppModal;
