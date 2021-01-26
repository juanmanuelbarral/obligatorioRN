import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ButtonBorder from './ButtonBorder';

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonBorder>
        <Text style={styles.textStyle}>Add</Text>
      </ButtonBorder>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'blue',
    fontWeight: '600',
  },
});

export default AddButton;
