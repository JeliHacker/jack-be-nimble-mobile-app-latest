import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Chip from '../components/Chip';

import { RootStackScreenProps } from '../navigation/types';

const TermView = ({ route }: RootStackScreenProps<'Term'>) => {
  const { term } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{term.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>States:</Text>
          {term.states.map((state) => (
            <View key={state} style={{ marginRight: 8 }}>
              <Chip label={state} />
            </View>
          ))}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Grade Level:</Text>
          <Chip label={term.stage} />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Short Definition</Text>
        <Text style={styles.body}>{term.shortDef}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>More</Text>
        <Text style={styles.body}>{term.mainDef}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Did you know?</Text>
        <Text style={styles.body}>{term.didYouKnow}</Text>
      </View>
    </ScrollView>
  );
};

export default TermView;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    letterSpacing: 1.5,
    fontWeight: '700',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  infoLabel: { fontSize: 18, marginRight: 8 },
  sectionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    letterSpacing: 1.5,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
  },
  body: {
    fontSize: 18,
    marginVertical: 8,
    letterSpacing: 1.5,
    lineHeight: 28,
  },
});
