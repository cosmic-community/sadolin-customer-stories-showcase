// app/stories/[slug]/page.tsx
import { getInstagramReelBySlug, getInstagramReels } from '@/lib/cosmic'
import { InstagramReel } from '@/types'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

export async function generateStaticParams() {
  const reels = await getInstagramReels() as InstagramReel[]
  
  return reels.map((reel) => ({
    slug: reel.slug,
  }))
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = await getInstagramReelBySlug(slug) as InstagramReel | null

  if (!story) {
    notFound()
  }

  const beforeImage = story.metadata.before_image
  const afterImage = story.metadata.after_image

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        href="/"
        className="inline-flex items-center text-secondary hover:text-secondary/80 mb-8 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to all stories
      </Link>

      <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              {story.metadata.customer_name.charAt(0)}
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-lg">{story.metadata.customer_name}</h2>
              <p className="text-gray-500 text-sm">
                {story.metadata.post_date ? new Date(story.metadata.post_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'Recently'}
              </p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {story.title}
          </h1>

          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 italic">
              "{story.metadata.customer_quote}"
            </p>
          </div>

          {(beforeImage || afterImage) && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Transformation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {beforeImage && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">BEFORE</p>
                    <img
                      src={`${beforeImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt="Before transformation"
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
                {afterImage && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">AFTER</p>
                    <img
                      src={`${afterImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt="After transformation"
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Featured Product</h3>
            <p className="text-lg text-primary font-semibold">
              {story.metadata.featured_product}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Caption</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {story.metadata.caption}
            </p>
          </div>

          {story.metadata.hashtags && (
            <div className="flex flex-wrap gap-2">
              {story.metadata.hashtags.split(' ').map((tag, index) => (
                <span
                  key={index}
                  className="text-secondary hover:text-secondary/80 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}