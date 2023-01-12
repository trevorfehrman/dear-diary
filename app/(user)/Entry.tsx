import ClientSideRoute from 'components/ClientSideRoute';
import { dateFormatter } from 'lib/date-formatter';
import { FilmIcon } from '@heroicons/react/24/outline';
import urlFor from 'lib/url-for';
import Image from 'next/image';

type Props = {
  entry: Post;
};

function Entry({ entry }: Props) {
  return (
    // <div className='p-10 border border-gray-400  rounded-lg'>
    <div>
      <h3 className='text-4xl text-gray-400 font-serif mb-5'>{dateFormatter(entry._createdAt)}</h3>
      <div className='flex'>
        <div className='relative w-72 h-96'>
          <ClientSideRoute route={`/entry/${entry.slug.current}`}>
            <Image
              src={urlFor(entry.mainImage).url()}
              className=' object-cover object-left-top'
              fill
              alt={entry.author.name}
            />
          </ClientSideRoute>
        </div>
        <div className='flex-1 pl-10'>
          <div>
            <h3 className='text-4xl font-bold'>{entry.title}</h3>
            <h4 className='bg-red-300 p-1 rounded uppercase text-center'>{entry.artist.name}</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in, laudantium veritatis
            praesentium sapiente ut enim laboriosam. A repellat, animi, error saepe eum hic facere
            sint unde placeat explicabo totam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Entry;
