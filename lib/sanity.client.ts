import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // TODO: look into making this true if url is Vercel, otherwise false
  useCdn: false,
});
