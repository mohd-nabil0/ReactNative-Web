import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../component/AppButton';
import { RootStackParamList } from '../navigation/types';

interface IProps {
  navigation: StackScreenProps<RootStackParamList, 'ScreenTwo'>['navigation'];
}

const ScreenTwo = ({navigation}: IProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.br} />
        <Text>Screen Two</Text>
        <AppButton onPress={() => navigation.pop()} text="Close" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  br: {
    height: 12,
  },
});

export default ScreenTwo;
