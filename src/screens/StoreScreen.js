import React, { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { SectionList } from 'react-native';
import * as actions from '../actions';
import ListSeparator from '../components/ListSeparator';
import Screen from '../components/Screen';
import StoreHeader from '../components/store/StoreHeader';
import StoreItem from '../components/store/StoreItem';
import StoreSection from '../components/store/StoreSection';
import HeaderIcon from '../components/HeaderIcon';
import iconCart from '../assets/icon-cart.png';

const StoreScreen = ({ navigation, sections, fetchStore }) => {
  useEffect(() => {
    fetchStore();
  }, [fetchStore]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIcon source={iconCart} onPress={() => navigation.navigate('Checkout')} />
      ),
    });
  }, [navigation]);

  return (
    <Screen>
      <SectionList
        sections={sections}
        keyExtractor={(item) => {
          // Here the item stands for each item of each section
          return item.item_id;
        }}
        renderItem={({ item }) => <StoreItem item={item} />}
        renderSectionHeader={({ section }) => {
          const { title } = section;
          return <StoreSection sectionText={title} />;
        }}
        ItemSeparatorComponent={() => <ListSeparator />}
        SectionSeparatorComponent={() => <ListSeparator />}
        ListHeaderComponent={<StoreHeader />}
      />
    </Screen>
  );
};

const parseDataToSections = (sections, search) => sections.map((section) => {
  const { section_id, name, items } = section;
  return { key: section_id, title: name, data: items };
});

//const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { filteredItems, search } = state.store;
  return {
    sections: parseDataToSections(filteredItems, search),
  };
};

const mapDispatchToProps = {
  fetchStore: actions.fetchStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);
