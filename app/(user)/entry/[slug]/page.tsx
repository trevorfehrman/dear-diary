import { PortableText } from '@portabletext/react';
import { RichTextComponents } from './RichTextComponents';
import { client } from 'lib/sanity.client';
import urlFor from 'lib/url-for';
import { groq } from 'next-sanity';
import Image from 'next/image';
type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type=='entry'] {
      slug
    }
  `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map(slug => slug.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
}

async function Entry({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='entry' && slug.current == $slug][0]
    {
      ...,
      author->,
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='pb-28'>
      <section className='space-y-2 border border-red-300 text-gray-900'>
        <div className='relative h-96 flex'>
          <div className='absolute top-0 right-0 p-5 grayscale'>
            <Image
              className='rounded-full'
              src={urlFor(post.author.image).url()}
              height={100}
              width={100}
              alt={post.author.name}
            />
          </div>
          <div className='absolute top-0 w-full h-full opacity-10 p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).width(750).height(200).url()}
              alt={`Poster for ${post.title}`}
              fill
            />
          </div>
          <section className='p-5 bg-red-300 w-full flex items-end justify-end'>
            <div className='text-center'>
              <h1 className='text-7xl font-extrabold'>{post.title}</h1>
              <p className='font-serif text-3xl'>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </section>
        </div>
      </section>
      <div className='max-w-4xl mx-auto text-xl mt-10'>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </article>
  );
}

export default Entry;
