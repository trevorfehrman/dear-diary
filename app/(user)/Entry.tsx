import ClientSideRoute from 'components/ClientSideRoute';
import { dateFormatter } from 'lib/date-formatter';
import { FilmIcon, TvIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import urlFor from 'lib/url-for';
import Image from 'next/image';

type Props = {
  entry: Post;
};

function Entry({ entry }: Props) {
  return (
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
        <div className='flex-1 pl-10 '>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex items-center mb-2'>
              <h3 className='text-4xl mb-2 mr-5'>{entry.title}</h3>
              <h4 className='px-5 py-1 rounded uppercase text-center tracking-[0.3em] font-light text-sm w-fit mr-5'>
                {entry.artist.name}
              </h4>
              {entry.mediaType.title === 'movie' && <FilmIcon className='h-10' />}
              {entry.mediaType.title === 'television' && <TvIcon className='h-10' />}
            </div>
            <p className='max-w-2xl text-lg tracking-wider'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure molestias culpa, saepe
              recusandae maxime praesentium facere magnam dignissimos quis nobis, consequuntur
              facilis suscipit ducimus voluptas eveniet ex nihil nulla cumque!
            </p>
            <ClientSideRoute route={`/entry/${entry.slug.current}`}>
              <ArrowRightIcon className='text-red-300 h-16 self-start cursor-pointer hover:translate-x-4 transition-all ease-out' />
            </ClientSideRoute>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
