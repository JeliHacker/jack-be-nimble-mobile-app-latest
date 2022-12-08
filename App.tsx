import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-hooks';

const algoliaClient = algoliasearch(
  'NDXGY695YD',
  '9a70dd038b3e2a4df5e66cbbd6365072'
);

export default function App() {
  return (
    <SafeAreaProvider>
      <InstantSearch searchClient={algoliaClient} indexName="sampleIndex">
        <Navigation />
        <StatusBar style="auto" />
      </InstantSearch>
    </SafeAreaProvider>
  );
}
