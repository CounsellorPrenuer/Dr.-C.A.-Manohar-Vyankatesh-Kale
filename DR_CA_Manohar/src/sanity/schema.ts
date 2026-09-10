import { type SchemaTypeDefinition } from 'sanity';
import { siteSettingsType } from './schemaTypes/siteSettings';
import { homePageType } from './schemaTypes/homePage';
import { founderType } from './schemaTypes/founder';
import { serviceType } from './schemaTypes/service';
import { packageType } from './schemaTypes/package';
import { testimonialType } from './schemaTypes/testimonial';
import { contactType } from './schemaTypes/contact';

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettingsType,
  homePageType,
  founderType,
  serviceType,
  packageType,
  testimonialType,
  contactType,
];
