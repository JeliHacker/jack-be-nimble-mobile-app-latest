import Fuse from 'fuse.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HighlightedText from '../components/HighlightedText';
import { getAllTerms, Term } from '../data/sanityClient';
import { BottomTabScreenProps } from '../navigation/types';
import { formatMatches } from '../utils/util';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = ({ navigation }: BottomTabScreenProps<'Search'>) => {
  const [allTerms, setAllTerms] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);
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
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerText}>JackBeNimble</Text>
        <View style={styles.inputContainer}>
          {isInputFocused && (
            <Pressable
              onPress={() => textInputRef.current?.blur()}
              style={{
                height: 40,
                justifyContent: 'center',
                paddingRight: 8,
              }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </Pressable>
          )}
          <View style={styles.textInputWrapper}>
            <TextInput
              value={searchText}
              onChangeText={search}
              style={styles.textInput}
              placeholder="Search"
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              ref={textInputRef}
            />
            {isInputFocused && searchText && (
              <Pressable onPress={() => setSearchText('')}>
                <Ionicons name="md-close-circle" size={24} color="black" />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      {searchHits.map((hit) => (
        <Hit key={hit.item._id} hit={hit} />
      ))}
      <Button
        title="go to term"
        onPress={() => navigation.navigate('Term', { termId: 'id' })}
      />
    </SafeAreaView>
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
  },
  header: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputWrapper: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    height: 50,
    backgroundColor: '#EEF1F2',
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 32,
  },
  textInput: {
    fontSize: 18,
    flexGrow: 1,
  },
  highlightedText: {
    fontWeight: '600',
  },
});

export default Search;
