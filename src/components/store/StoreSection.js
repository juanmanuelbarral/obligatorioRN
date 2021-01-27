import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';

const StoreSection = ({ sectionText }) => {
  return (
    <Text
      h2
      style={styles.sectionStyle}
    >
      {sectionText}
    </Text>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    padding: 15,
  }
});

export default StoreSection;
