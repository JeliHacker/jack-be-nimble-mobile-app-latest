import Fuse from 'fuse.js';

export interface TextPart {
  value: string;
  isHighlighted: boolean;
}

export const formatMatches = (
  hit: Fuse.FuseResult<Term>
): { title: TextPart[]; shortDef: TextPart[] } => {
  const { title, shortDef } = hit.item;
  /* Get indices for matched characters. There might be no match for a specific field. Return an empty array
        in that case */
  const titleMatchIndices =
    hit.matches?.find((match) => match.key === 'title')?.indices || [];
  const shortDefMatchIndices =
    hit.matches?.find((match) => match.key === 'shortDef')?.indices || [];
  return {
    title: getPartsWithHighlight(title, titleMatchIndices),
    shortDef: getPartsWithHighlight(shortDef, shortDefMatchIndices),
  };
};

const getPartsWithHighlight = (
  text: string,
  indices: readonly Fuse.RangeTuple[]
) => {
  const result: TextPart[] = [];
  let prevEnd = -1;
  for (const range of indices) {
    const [start, end] = range;
    result.push({
      value: text.substring(prevEnd + 1, start),
      isHighlighted: false,
    });
    result.push({ value: text.substring(start, end + 1), isHighlighted: true });
    prevEnd = end;
  }
  result.push({
    value: text.substring(prevEnd + 1, text.length),
    isHighlighted: false,
  });
  return result;
};
