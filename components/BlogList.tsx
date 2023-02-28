import Image from 'next/image'
import urlFor from '../lib/urlFor'
import ClientSideRoute from './ClientSideRoute'

interface Props {
  posts: Post[]
}

const BlogList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <hr className="color-yellow-500 mb-5" />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {posts.map(post => (
          <ClientSideRoute route={`/post/${post.slug.current}`}>
            <div key={post._id} className='flex flex-col group cursor-pointer'>
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image src={urlFor(post.mainImage).url()} alt="main image" fill className='object-cover object-left lg:object-center' />
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-y-2'>
                    {post.categories.map(category => (
                      <div key={category._id} className='text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-5 flex-1'>
                <p className='underline text-lg font-bold'>{post.title}</p>
                <p className='text-gray-500'>{post.description}</p>
              </div>
              <p className='mt-5 font-bold flex items-center group-hover:underline'>Read Post</p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </>
  )
}

export default BlogList