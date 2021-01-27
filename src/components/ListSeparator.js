import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../resources/colors';

const ListSeparator = () => {
  return <View style={styles.separatorStyle} />;
};

const styles = StyleSheet.create({
  separatorStyle: {
    height: 1,
    backgroundColor: colors.grey400,
    marginHorizontal: 15,
    opacity: 0.4
  }
});

export default ListSeparator;
