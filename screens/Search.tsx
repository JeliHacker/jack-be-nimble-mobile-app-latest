import { Button, StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '../navigation/types';

const Search = ({ navigation }: BottomTabScreenProps<'Search'>) => {
  return (
    <View style={styles.container}>
      <Button
        title="go to term"
        onPress={() => navigation.navigate('Term', { termId: 'id' })}
      />
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
