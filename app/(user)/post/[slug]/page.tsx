import { groq } from 'next-sanity'
import { client } from '../../../../lib/sanity.client'
import Image from 'next/image'
import urlFor from '../../../../lib/urlFor'
import { PortableText } from '@portabletext/react'
import { RichTextComponent } from '../../../../components/RichTextComponent'

type Props = {
    params: {
        slug: string
    }
}

const page = async ({ params: { slug } }: Props) => {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }`

    const post: Post = await client.fetch(query, { slug })
    return (
        <section className='px-10 pb-20'>
            <article className='space-y-2 border border-yellow-500 text-white justify-between'>
                <div className='relative min-h-56 flex flex-col md:flex-row'>
                    <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                        <Image className='object-cover object-center mx-auto' src={urlFor(post.mainImage).url()} alt="main image" fill />
                    </div>
                </div>
                <article className='p-5 bg-[#e3c427a4] bg-opacity-30 w-full'>
                    <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                        <div>
                            <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                            <p>{new Date(post._createdAt).toLocaleDateString('en-US', {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })}</p>
                        </div>
                        <div>
                            <Image className='rounded-full' src={urlFor(post.author.image).url()} height={40} width={40} alt="author pic" />
                            <div className="w-64">
                                <h3 className='text-lg font-bold'>{post.author.name}</h3>
                                <div>{/* Todo author bio */}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="italic pt-10">{post.description}</h2>
                        <div className='flex items-center justify-end mt-auto space-x-2'>
                            {post.categories.map((category) => (
                                <p key={category._id} className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'>{category.title}</p>
                            ))}
                        </div>
                    </div>
                </article>
            </article>
            <PortableText value={post.body} components={RichTextComponent} />
        </section>
    )
}

export default page