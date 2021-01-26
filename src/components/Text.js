import React from 'react';
import { StyleSheet, Text as TextRN } from 'react-native';
import { colors } from '../resources/colors';

const Text = (props) => {
  const { children, style, h1, h2, h3, grey } = props;
  const textStyle = [styles.defaultStyle];

  if (h1) {
    textStyle.push(styles.h1Style);
  } else if (h2) {
    textStyle.push(styles.h2Style);
  } else if (h3) {
    textStyle.push(styles.h3Style);
  }

  if (grey) {
    textStyle.push(styles.greyStyle);
  }

  if (style) {
    textStyle.push(style);
  }

  return <TextRN style={textStyle}>{children}</TextRN>;
};

Text.defaultProp = {
  h1: false,
  h2: false,
  h3: false,
  grey: false,
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: colors.black,
  },
  greyStyle: {
    color: colors.grey600,
  },
  h1Style: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2Style: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3Style: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Text;
