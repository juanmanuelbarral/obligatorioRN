import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchBar from '../SearchBar';

const StoreHeader = ({ value, searchInput }) => {
  return (
    <View style={styles.containerStyle}>
      {/* //TODO add banner */}
      
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
    marginVertical: 10
  },
  searchBarStyle: {
    marginHorizontal: 15
  }
});

const mapStateToProps = (state) => ({
  value: state.store.search
});

export default connect(mapStateToProps, actions)(StoreHeader);
