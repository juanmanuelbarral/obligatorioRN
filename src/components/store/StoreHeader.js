import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Banner from '../Banner';
import SearchBar from '../SearchBar';
import Separator from '../Separator';

const StoreHeader = ({ value, searchInput }) => {
  return (
    <View style={styles.containerStyle}>
      <Separator bottom={20}>
        {/* //TODO: aux only banner - will have to make carrousel */}
        <Banner />
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
