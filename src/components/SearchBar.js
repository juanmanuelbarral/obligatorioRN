import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { colors } from '../resources/colors';
import searchIcon from '../assets/icon-search.png';

const SearchBar = ({ value, onChangeText, onSubmit, containerStyle }) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Image source={searchIcon} style={styles.imageStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: colors.blueGrey200_a40,
  },
  imageStyle: {
    height: 18,
    width: 18,
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    marginEnd: 10,
    alignSelf: 'stretch',
  },
});

export default SearchBar;
