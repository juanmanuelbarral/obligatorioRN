import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RoundImage from '../components/RoundImage';
import avocadoImg from '../assets/Avocado.png';
import grapefruitImg from '../assets/Grapefruit-2.png';
import RoundCornersImage from '../components/RoundCornersImage';

const StoreScreen = () => {
  return (
    <View>
      <Text>StoreScreen</Text>
      <RoundImage source={avocadoImg} />
      <RoundCornersImage
        source={grapefruitImg}
        style={styles.roundedCornersImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  roundedCornersImage: {
    height: 120,
    width: 120,
  },
});

export default StoreScreen;
