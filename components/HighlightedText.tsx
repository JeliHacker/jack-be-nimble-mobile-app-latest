import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { TextPart } from '../utils/util';

interface HighlightedTextProps {
  textParts: TextPart[];
  style?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
}

const HighlightedText = ({
  textParts,
  highlightStyle,
  style,
}: HighlightedTextProps) => {
  return (
    <Text>
      {textParts.map((part, idx) => (
        <Text key={idx} style={part.isHighlighted ? highlightStyle : style}>
          {part.value}
        </Text>
      ))}
    </Text>
  );
};

export default HighlightedText;
