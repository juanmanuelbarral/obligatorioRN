import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, SectionList } from 'react-native';
import * as actions from '../actions';
import * as StringHelper from '../helpers/StringHelper';
import ListSeparator from '../components/ListSeparator';
import StoreHeader from '../components/store/StoreHeader';
import StoreItem from '../components/store/StoreItem';
import StoreSection from '../components/store/StoreSection';

const StoreScreen = ({ sections, fetchStore }) => {
  useEffect(() => {
    fetchStore();
  }, []);

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
        ListHeaderComponent={() => <StoreHeader />}
      />
    </View>
  );
};

const parseDataToSections = (data, search) => data.map((item) => {
  const section = filterSection(item, search);
  const { section_id, name, items } = section;
  return { key: section_id, title: name, data: items };
});

const filterSection = (section, filter) => {
  const { name, items } = section;

  if (!filter) { return section; }

  const okSection = StringHelper.contains(name, filter);
  if (okSection) { return section; }

  const filteredItems = items.filter(item => StringHelper.contains(item.name, filter));
  return { ...section, items: filteredItems };
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { items, search } = state.store;
  return {
    sections: parseDataToSections(items, search)
  }
};

export default connect(mapStateToProps, actions)(StoreScreen);
