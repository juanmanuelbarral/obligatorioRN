import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AddButton from '../AddButton';
import QuantityControl from '../QuantityControl';
import RoundImage from '../RoundImage';
import Text from '../Text';

const StoreItem = (props) => {
  const { item, quantity, cartItemDecrease, cartItemIncrease } = props;
  const { item_id, name, price, imgSmall } = item;

  return (
    <View style={styles.containerStyle}>
      <RoundImage source={imgSmall} />

      <View style={styles.textContainer}>
        <Text h3>{name}</Text>
        <Text grey>{`$${price}`}</Text>
      </View>

      {quantity === 0
        ? <AddButton onPress={() => cartItemIncrease(item_id)} />
        : (
          <QuantityControl
            quantity={quantity}
            onPressMinus={() => cartItemDecrease(item_id)}
            onPressPlus={() => cartItemIncrease(item_id)}
          />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    margin: 7,
  }
});

const mapStateToProps = (state, ownProps) => {
  const { item: { item_id } } = ownProps;
  const quantity = state.cart[item_id] || 0;

  return { quantity };
};

export default connect(mapStateToProps, actions)(StoreItem);
