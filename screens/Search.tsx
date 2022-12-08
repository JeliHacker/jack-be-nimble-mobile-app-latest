import Fuse from 'fuse.js';
import { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View } from 'react-native';
import HighlightedText from '../components/HighlightedText';
import { getAllTerms, Term } from '../data/sanityClient';
import { BottomTabScreenProps } from '../navigation/types';
import { formatMatches } from '../utils/util';

const Search = ({ navigation }: BottomTabScreenProps<'Search'>) => {
  const [allTerms, setAllTerms] = useState([]);
  const [searchText, setSearchText] = useState('');
  const keys = ['title', 'shortDef'];
  const searchClient = useMemo(
    () =>
      new Fuse(allTerms, {
        keys,
        includeMatches: true,
        minMatchCharLength: 3,
        threshold: 0.4,
      }),
    [allTerms]
  );
  const [searchHits, setSearchHits] = useState<Fuse.FuseResult<Term>[]>([]);

  const search = (text: string) => {
    /* If there is no term to search for, don't search */
    if (allTerms.length === 0) return;
    setSearchText(text);
    const hits = searchClient.search(text);
    setSearchHits(hits);
  };

  useEffect(() => {
    (async () => {
      const data = await getAllTerms();
      setAllTerms(data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchText}
        onChangeText={search}
        style={styles.textInput}
      />
      {searchHits.map((hit) => (
        <Hit key={hit.item._id} hit={hit} />
      ))}
      <Button
        title="go to term"
        onPress={() => navigation.navigate('Term', { termId: 'id' })}
      />
    </View>
  );
};

const Hit = ({ hit }: { hit: Fuse.FuseResult<Term> }) => {
  console.log(hit.item.title, hit.item.shortDef);
  const { title, shortDef } = formatMatches(hit);
  return (
    <View key={hit.item._id}>
      <HighlightedText
        textParts={title}
        highlightStyle={styles.highlightedText}
      />
      <HighlightedText
        textParts={shortDef}
        highlightStyle={styles.highlightedText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    padding: 8,
  },
  highlightedText: {
    fontWeight: '600',
  },
});

export default Search;
