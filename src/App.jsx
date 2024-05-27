import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppModal from './AppModal';

export default function App() {
  const [number, setNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handlePress() {
    setNumber(parseInt(Math.random() * 10000, 10) % 100);
    Alert.alert('Title', 'message');
  }

  return (
    <View style={styles.container}>
      {showModal && <AppModal onClose={() => setShowModal(false)}/>}
      <SafeAreaView>
        <View style={styles.br} />
        <View style={styles.randomNumberContainer}>
          <Text>Random number: {number}</Text>
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.btnText}>Generate a number</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowModal(val => !val)}>
          <Text style={styles.btnText}>Show Modal</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  br: {
    height: 12,
  },
  randomNumberContainer: {
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: 'black',
    padding: 10,
    marginVertical: 20,
  },
  btn: {
    width: '70%',
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
