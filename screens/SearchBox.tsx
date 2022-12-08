import React, { useRef, useState } from 'react';
import { useSearchBox } from 'react-instantsearch-hooks';
import { StyleSheet, TextInput } from 'react-native';

const SearchBox = (props: any) => {
  const { query, refine } = useSearchBox(props);
  const [text, setText] = useState(query);
  const inputRef = useRef<TextInput | null>(null);

  const onChangeText = (newValue: string) => {
    setText(newValue);
    refine(newValue);
  };

  if (query !== text && !inputRef.current?.isFocused()) setText(query);

  return (
    <TextInput
      value={text}
      onChangeText={onChangeText}
      ref={inputRef}
      style={styles.input}
    />
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 200,
    padding: 12,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ddd',
  },
});
