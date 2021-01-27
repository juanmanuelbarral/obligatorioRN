import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import Text from '../components/Text';
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
        renderItem={({ item }) => {
          const text = `${item.name} - ${item.price}`
          return <Text>{text}</Text>;
        }}
        renderSectionHeader={({ section }) => {
          const { title } = section;
          return <Text>{title}</Text>;
        }}
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
