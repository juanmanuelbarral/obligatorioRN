import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import ListSeparator from '../components/ListSeparator';
import StoreItem from '../components/store/StoreItem';
import StoreSection from '../components/store/StoreSection';
import storeItems from '../db/items';

const StoreScreen = () => {
  const sections = parseDataToSections(storeItems);

  return (
    <View>
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
      />
    </View>
  );
};

const parseDataToSections = (data) => data.map((item) => {
  const { section_id, name, items } = item;
  return { key: section_id, title: name, data: items };
});

const styles = StyleSheet.create({});

export default StoreScreen;
