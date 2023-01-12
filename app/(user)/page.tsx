import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from 'lib/sanity.client';
import PreviewSuspense from 'components/PreviewSuspense';
import PreviewEntryList from 'components/PreviewEntryList';
import EntryList from 'app/(user)/EntryList';
import Banner from 'app/(user)/Banner';

const query = groq`
  *[_type=="post"] {
    ...,
    artist->,
    author->,
    mediaType->,
    categories[]->,
  } | order(_createdAt, desc)
`;

export const revalidate = 60;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <Banner />
        <PreviewEntryList query={query} />
      </PreviewSuspense>
    );
  }

  const entries = await client.fetch(query);
  return (
    <>
      <Banner />
      <EntryList entries={entries} />
    </>
  );
}
