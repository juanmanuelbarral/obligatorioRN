import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchBar from '../SearchBar';
import Separator from '../Separator';
import StoreCarousel from './StoreCarousel';

const StoreHeader = ({ value, searchInput }) => {
  return (
    <View style={styles.containerStyle}>
      <Separator bottom={20}>
        <StoreCarousel />
      </Separator>

      <SearchBar
        containerStyle={styles.searchBarStyle}
        value={value}
        onChangeText={searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 10,
  },
  searchBarStyle: {
    marginHorizontal: 15,
  },
});

const mapStateToProps = (state) => ({
  value: state.store.search,
});

const mapDispatchToProps = {
  searchInput: actions.searchInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreHeader);
