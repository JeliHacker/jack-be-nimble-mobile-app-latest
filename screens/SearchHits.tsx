import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useHits } from 'react-instantsearch-hooks';

const SearchHits = (props: any) => {
  const { hits } = useHits();
  return (
    <FlatList
      data={hits}
      renderItem={({ item: hit }) => <Text>{hit.author_name as string}</Text>}
    />
  );
};

export default SearchHits;

const styles = StyleSheet.create({});
