import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../resources/colors';
import ButtonBorder from './ButtonBorder';

const QuantityControl = ({ quantity, onPressMinus, onPressPlus }) => {
  return (
    <ButtonBorder color={colors.grey400}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.symbolContainerStyle}
          onPress={onPressMinus}
        >
          <Text style={styles.symbolStyle}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityStyle}>{quantity}</Text>

        <TouchableOpacity
          style={styles.symbolContainerStyle}
          onPress={onPressPlus}
        >
          <Text style={styles.symbolStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </ButtonBorder>
  );
};

QuantityControl.defaultProps = {
  quantity: 0,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  quantityStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  symbolContainerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolStyle: {
    fontSize: 16,
    fontWeight: '800',
  },
});

export default QuantityControl;
