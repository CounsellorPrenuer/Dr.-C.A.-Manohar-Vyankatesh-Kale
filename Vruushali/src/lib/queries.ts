import { groq } from 'next-sanity'

export const homePageQuery = groq`*[_type == "homePage"][0]`
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const founderQuery = groq`*[_type == "founder"][0]`
export const servicesQuery = groq`*[_type == "service"] | order(order asc)`
export const packagesQuery = groq`*[_type == "mentoriaPackage"] | order(order asc)`
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc)`
export const contactQuery = groq`*[_type == "contact"][0]`