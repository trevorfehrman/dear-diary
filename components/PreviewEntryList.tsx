'use client';
import { usePreview } from 'lib/sanity.preview';
import EntryList from './EntryList';

type Props = {
  query: string;
};

function PreviewEntryList({ query }: Props) {
  const posts = usePreview(null, query);
  return <EntryList posts={posts} />;
}

export default PreviewEntryList;
