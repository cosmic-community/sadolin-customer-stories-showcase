import { InstagramReel } from '@/types'
import Link from 'next/link'

interface StoryCardProps {
  story: InstagramReel;
}

export default function StoryCard({ story }: StoryCardProps) {
  const beforeImage = story.metadata.before_image
  const afterImage = story.metadata.after_image
  const displayImage = afterImage || beforeImage

  return (
    <Link href={`/stories/${story.slug}`}>
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
        {displayImage && (
          <div className="relative h-64 overflow-hidden">
            <img
              src={`${displayImage.imgix_url}?w=800&h=512&fit=crop&auto=format,compress`}
              alt={story.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 gradient-overlay opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl mb-1">
                {story.title}
              </h3>
              <p className="text-white/90 text-sm">
                {story.metadata.customer_name}
              </p>
            </div>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {story.metadata.customer_name.charAt(0)}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-gray-800 text-sm line-clamp-3">
                "{story.metadata.customer_quote}"
              </p>
            </div>
          </div>

          <div className="bg-secondary/10 rounded-lg px-3 py-2 mb-4">
            <p className="text-xs text-gray-600 mb-1 font-semibold">Featured Product</p>
            <p className="text-sm font-semibold text-secondary">
              {story.metadata.featured_product}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {story.metadata.post_date ? new Date(story.metadata.post_date).toLocaleDateString() : 'Recently'}
            </span>
            <span className="text-primary font-semibold group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}