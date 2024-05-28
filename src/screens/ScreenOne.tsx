import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppModal from '../AppModal';
import AppButton from '../component/AppButton';
import { RootStackParamList } from '../navigation/types';

interface IProps {
  navigation: StackScreenProps<RootStackParamList, 'ScreenOne'>['navigation'];
}

const ScreenOne = ({navigation}: IProps) => {
  const [number, setNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handlePress() {
    setNumber((Math.random() * 10000) % 100);
    Alert.alert('Title', 'message');
  }

  return (
    <View style={styles.container}>
      {showModal && <AppModal onClose={() => setShowModal(false)} />}
      <SafeAreaView>
        <View style={styles.br} />
        <View style={styles.randomNumberContainer}>
          <Text>Random number: {number}</Text>
          <AppButton onPress={handlePress} text="Generate a number" />
        </View>
        <AppButton
          onPress={() => setShowModal(val => !val)}
          text="Show Modal"
        />
        <AppButton
          onPress={() => navigation.navigate('ScreenTwo')}
          text="Navigate To Screen Two"
        />
        <AppButton
          onPress={() => navigation.navigate('ScreenThree')}
          text="Replace With Screen Three"
        />
      </SafeAreaView>
    </View>
  );
};

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
});

export default ScreenOne;
