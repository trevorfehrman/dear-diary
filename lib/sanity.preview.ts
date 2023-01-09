'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from 'lib/sanity.client';

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

if (!projectId || !dataset) {
  throw new Error('Missing project id or dataset.  Check your sanity.config or .env file');
}

export const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });
