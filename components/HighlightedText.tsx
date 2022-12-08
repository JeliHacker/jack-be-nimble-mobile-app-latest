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
    <Text style={style}>
      {textParts.map((part, idx) => (
        <Text key={idx} style={part.isHighlighted && highlightStyle}>
          {part.value}
        </Text>
      ))}
    </Text>
  );
};

export default HighlightedText;
