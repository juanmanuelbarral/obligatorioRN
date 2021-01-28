import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../resources/colors';
import { dimens } from '../../resources/dimens';

const TotalPrice = ({price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalLabel}>Total:</Text>
      <Text style={styles.priceStyle}>{`$${price}`}</Text>
    </View>
  );
};

TotalPrice.defaultProps = {
  price: 0,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginHorizontal: dimens.screenMarginHz,
    marginVertical: 20,
  },
  totalLabel: {
    color: colors.blueGrey900,
    fontSize: 30,
  },
  priceStyle: {
    fontSize: 45,
    fontWeight: '600',
  },
});

export default TotalPrice;
