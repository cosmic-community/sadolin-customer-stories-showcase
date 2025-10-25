import { getInstagramReels } from '@/lib/cosmic'
import { InstagramReel } from '@/types'
import StoryCard from '@/components/StoryCard'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const reels = await getInstagramReels() as InstagramReel[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Customer Transformations
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from satisfied customers who chose Sadolin paint for their projects.
          See the amazing before and after results!
        </p>
      </div>

      {reels.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No customer stories available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel) => (
            <StoryCard key={reel.id} story={reel} />
          ))}
        </div>
      )}
    </div>
  )
}