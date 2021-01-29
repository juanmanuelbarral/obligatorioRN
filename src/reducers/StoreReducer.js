import * as types from '../actions/types';
import * as StringHelper from '../helpers/StringHelper';

const INITIAL_STATE = {
  search: '',
  items: [],
  filteredItems: [],
  banners: [],
};

export default (state = INITIAL_STATE, action) => {
  const { search, items } = state;
  const { type, payload } = action;
  let filteredItems;

  switch (type) {
    case types.FETCH_BANNERS:
      return { ...state, banners: payload };
    case types.FETCH_STORE:
      filteredItems = filterSections(payload, search);
      return { ...state, items: payload, filteredItems };
    case types.SEARCH_INPUT:
      filteredItems = filterSections(items, payload);
      return { ...state, search: payload, filteredItems };
    default:
      return state;
  }
};

const filterSections = (sections, filter) => {
  return sections.map(section => filterSection(section, filter));
};

const filterSection = (section, filter) => {
  const { name, items } = section;

  if (!filter) { return section; }

  const okSection = StringHelper.contains(name, filter);
  if (okSection) { return section; }

  const filteredItems = items.filter(item => StringHelper.contains(item.name, filter));
  return { ...section, items: filteredItems };
};
