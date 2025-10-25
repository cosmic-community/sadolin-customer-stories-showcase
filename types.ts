// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Instagram Reel type with typed metadata
export interface InstagramReel extends CosmicObject {
  type: 'instagram-reels';
  metadata: {
    reel_video?: {
      url: string;
      imgix_url: string;
    } | null;
    customer_name: string;
    customer_quote: string;
    featured_product: string;
    before_image?: {
      url: string;
      imgix_url: string;
    } | null;
    after_image?: {
      url: string;
      imgix_url: string;
    } | null;
    caption: string;
    hashtags?: string;
    post_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guard for Instagram Reel
export function isInstagramReel(obj: CosmicObject): obj is InstagramReel {
  return obj.type === 'instagram-reels';
}