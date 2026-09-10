import { Studio } from './Studio'

export const dynamic = 'force-static'

// Ensure we statically generate the base studio route
export function generateStaticParams() {
  return [{ tool: [] }]
}

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}
