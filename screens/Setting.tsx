import { StyleSheet, Text, View } from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
