import { Button, StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '../navigation/types';
import SearchBox from './SearchBox';
import SearchConfigure from './SearchConfigure';
import SearchHits from './SearchHits';

const Search = ({ navigation }: BottomTabScreenProps<'Search'>) => {
  return (
    <View style={styles.container}>
      <SearchConfigure hitsPerPage={5} />
      <SearchBox />
      <View style={{ backgroundColor: 'red' }}>
        <SearchHits />
      </View>
      <Button
        title="go to term"
        onPress={() => navigation.navigate('Term', { termId: 'id' })}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
