import { ArrowRightIcon } from '@heroicons/react/24/solid';
import urlFor from 'lib/url-for';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';
type Props = {
  posts: Post[];
};
function EntryList({ posts }: Props) {
  return (
    <div>
      <hr className='border-[#F7AB0A] mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 pb-24'>
        {/* posts */}

        {posts.map(post => (
          <ClientSideRoute key={post._id} route={`/entry/${post.slug.current}`}>
            <div className='group cursor-pointer flex flex-col'>
              <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                <Image
                  src={urlFor(post.mainImage).url()}
                  className='object-cover object-left lg:object-center'
                  fill
                  alt={post.author.name}
                />
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold'>{post.title}</p>
                    <p className='font-bold'>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {post.categories.map(category => (
                      <div
                        key={category._id}
                        className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-5 flex-1'>
                <p className='unerline text-lg font-bold'>{post.title}</p>
                <p className='text-gray-500 line-clamp-2'>{post.description}</p>
              </div>
              <p className='mt-5 font-bold group-hover:underline flex items-center'>
                Read Post <ArrowRightIcon className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default EntryList;
