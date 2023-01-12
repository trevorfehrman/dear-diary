'use client';
import { usePreview } from 'lib/sanity.preview';
import EntryList from '../app/(user)/EntryList';

type Props = {
  query: string;
};

function PreviewEntryList({ query }: Props) {
  const posts = usePreview(null, query);
  return <EntryList entries={posts} />;
}

export default PreviewEntryList;
