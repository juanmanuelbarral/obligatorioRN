import React from 'react';
import { StyleSheet, View } from 'react-native';
import { appColors } from '../resources/colors';

const Screen = ({children, style}) => {
  return (
    <View style={[styles.screenStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: appColors.backgroundGeneral,
  },
});

export default Screen;
