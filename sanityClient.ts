import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: 'jvp97oji',
  dataset: 'production',
  apiVersion: '2022-12-05',
  useCdn: false,
});

const query = '*[_type == "term" && title == $term][0]';

export const getTerm = async (title: string) => {
  return client.fetch(query, { term: title });
};

export interface Term {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  title: string;
  stage: string;
  states: string[];
  shortDef: string;
  mainDef: string;
  didYouKnow: string;
}
