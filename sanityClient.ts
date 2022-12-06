import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: 'jvp97oji',
  dataset: 'production',
  apiVersion: '2022-12-05',
  useCdn: false,
});

const query = '*[_type == "term" && title == $term][0]';

export const fetchTermWithTitle = (title: string) =>
  client.fetch(query, { term: title }).then((term) => console.log(term.title));
