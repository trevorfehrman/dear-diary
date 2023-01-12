import { getDefaultDocumentNode } from './structure';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioNavbar from 'app/(admin)/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Dear_Diary_Content_Studio',
  title: 'Dear Diary Content Studio',

  projectId,
  dataset,

  plugins: [deskTool({ defaultDocumentNode: getDefaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },

  theme: myTheme,
});
