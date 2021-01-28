import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = ({ children, hz, vt, top, bottom, left, right }) => {
  let containerStyle = {
    marginHorizontal: 0,
    marginVertical: 0,
  };

  if (hz) { containerStyle = { ...containerStyle, marginHorizontal: hz }; }
  if (vt) { containerStyle = { ...containerStyle, marginVertical: vt }; }
  if (top) { containerStyle = { ...containerStyle, marginTop: top }; }
  if (bottom) { containerStyle = { ...containerStyle, marginBottom: bottom }; }
  if (left) { containerStyle = { ...containerStyle, marginLeft: left }; }
  if (right) { containerStyle = { ...containerStyle, marginRight: right }; }

  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Separator;
