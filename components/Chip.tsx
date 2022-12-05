import { View, Text, StyleSheet } from 'react-native';

export interface ChipProps {
  backgroundColor?: string;
  textColor?: string;
  label: string;
}

const Chip = ({
  backgroundColor = '#00B578',
  textColor = 'white',
  label,
}: ChipProps) => {
  return (
    <View style={[styles.chipContainer, { backgroundColor }]}>
      <Text style={[styles.chipText, { color: textColor }]}>{label}</Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chipContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  chipText: { fontSize: 14, fontWeight: '700' },
});
