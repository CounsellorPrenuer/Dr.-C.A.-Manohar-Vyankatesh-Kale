import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: 'gm2buqg0',
  dataset: 'production',
  title: 'Dr CA Manohar Career Guidance',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
