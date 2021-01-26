import React from 'react';
import { StyleSheet, View } from 'react-native';
import RoundImage from '../components/RoundImage';
import avocadoImg from '../assets/Avocado.png';
import grapefruitImg from '../assets/Grapefruit-2.png';
import RoundCornersImage from '../components/RoundCornersImage';
import AddButton from '../components/AddButton';
import QuantityControl from '../components/QuantityControl';
import Text from '../components/Text';
import { colors } from '../resources/colors';
import SearchBar from '../components/SearchBar';

const StoreScreen = () => {
  return (
    <View>
      <Text>StoreScreen</Text>
      <Text grey>StoreScreen</Text>
      <Text style={{ color: colors.grey400 }}>StoreScreen</Text>
      <Text h1>StoreScreen</Text>
      <Text h2 grey>StoreScreen</Text>
      <Text h3>StoreScreen</Text>
      <RoundImage source={avocadoImg} />
      <RoundCornersImage
        source={grapefruitImg}
        style={styles.roundedCornersImage}
      />
      <AddButton />
      <QuantityControl />
      <SearchBar />
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
