import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chip from './Chip';

const Term = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Self-Contained Classroom</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>States:</Text>
          <Chip label="All" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Grade Level:</Text>
          <Chip label="K-12" />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Short Definition</Text>
        <Text style={styles.body}>
          A classroom for students with disabilities where one special education
          teacher is responsible for teaching all academic subjects
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>More</Text>
        <Text style={styles.body}>
          "Self-contained classrooms" are classrooms where students with
          disabilities spend the entire day. They would not have different
          teachers for different subjects, rather, they would be taught all
          academic subjects by one special education teacher. Self-contained
          classrooms also do not have any students without disabilities.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Did you know?</Text>
        <Text style={styles.body}>
          Self-contained classrooms do not provide students with disabilities
          the opportunities to engage with their non-disabled peers.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Term;

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
