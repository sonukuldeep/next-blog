import { previewData } from 'next/headers';
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

const query = groq`
*[_type=='post'] {
  ...,
  authors->,
  categories[]->
} | order(_createdAt desc)
`

const page = async () => {

  const preview = previewData()

  if (preview) {
    return (
      <PreviewSuspense fallback={
        <div role="status">
          <p className='text-center text-lg animate-pulse text-orange-500'>Loading preview data...</p>
        </div>
      }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }
  else {
    const posts = await client.fetch(query)
    return (
      <BlogList posts={posts} />
    )
  }
}

export default page