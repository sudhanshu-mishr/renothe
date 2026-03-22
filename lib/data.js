export const categories = ['Men', 'Women', 'Kids', 'Occasion wear', 'Streetwear', 'Vintage'];

export const products = [
  {
    id: 'emerald-gown',
    title: 'Emerald Evening Gown',
    description:
      'Elegant satin gown tailored for weddings, galas, and premium events. Available for both direct purchase and short-term rentals.',
    price: 180,
    rentPrice: 42,
    size: 'M',
    brand: 'Luna Atelier',
    condition: 'Like new',
    category: 'Occasion wear',
    location: 'Brooklyn, NY',
    tags: ['Featured', 'Women', 'Wedding Guest'],
    listingMode: 'hybrid',
    sellerName: 'Velvet Hanger Studio',
    sellerType: 'shop',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviews: [
      { user: 'Maria', rating: 5, comment: 'Looked brand new and delivery was on time.' },
      { user: 'Tina', rating: 4.8, comment: 'Perfect fit for my engagement party.' }
    ],
    featured: true,
    trending: true,
    availability: [
      { start: '2026-03-22', end: '2026-03-28', status: 'available' },
      { start: '2026-03-29', end: '2026-04-01', status: 'booked' }
    ]
  },
  {
    id: 'denim-set',
    title: 'Vintage Denim Utility Set',
    description: 'A curated 90s-inspired unisex denim combo with a structured jacket and tapered jeans.',
    price: 88,
    rentPrice: 22,
    size: 'L',
    brand: 'Retro Loop',
    condition: 'Excellent',
    category: 'Vintage',
    location: 'Austin, TX',
    tags: ['Trending', 'Men', 'Unisex'],
    listingMode: 'hybrid',
    sellerName: 'Arlo Benson',
    sellerType: 'user',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'],
    rating: 4.7,
    reviews: [{ user: 'Jay', rating: 4.7, comment: 'Great quality and true to the photos.' }],
    featured: true,
    trending: true,
    availability: [{ start: '2026-03-22', end: '2026-04-05', status: 'available' }]
  },
  {
    id: 'kids-sherwani',
    title: 'Kids Celebration Sherwani',
    description: 'Comfort-first festive sherwani for family weddings and cultural celebrations.',
    price: 54,
    rentPrice: 16,
    size: '8Y',
    brand: 'Little Loom',
    condition: 'Excellent',
    category: 'Kids',
    location: 'Edison, NJ',
    tags: ['Kids', 'Festive'],
    listingMode: 'hybrid',
    sellerName: 'Rental Rack',
    sellerType: 'shop',
    images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'],
    rating: 4.8,
    reviews: [{ user: 'Amrita', rating: 4.8, comment: 'Soft fabric and easy pickup.' }],
    availability: [{ start: '2026-03-22', end: '2026-03-30', status: 'available' }]
  },
  {
    id: 'linen-coord',
    title: 'Minimal Linen Coord Set',
    description: 'Neutral-toned breathable coord set perfect for everyday wear or travel capsule wardrobes.',
    price: 70,
    size: 'S',
    brand: 'North Edit',
    condition: 'Good',
    category: 'Women',
    location: 'San Diego, CA',
    tags: ['Women', 'Daily wear'],
    listingMode: 'sale',
    sellerName: 'Mila Harper',
    sellerType: 'user',
    images: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'],
    rating: 4.5,
    reviews: [{ user: 'Sara', rating: 4.5, comment: 'Exactly as described.' }],
    availability: [{ start: '2026-03-22', end: '2026-04-20', status: 'available' }]
  }
];

export const adminStats = [
  { label: 'Active users', value: '12.8k', change: '+14% this month' },
  { label: 'Orders', value: '1,482', change: '+9% conversion' },
  { label: 'Rental revenue', value: '$48.6k', change: '+22% vs last month' },
  { label: 'Listings pending', value: '38', change: 'Needs moderation today' }
];

export const shopStats = [
  { label: 'Rentable inventory', value: '126', change: '18 due for cleaning' },
  { label: 'Upcoming rentals', value: '43', change: 'Next 7 days' },
  { label: 'Occupancy rate', value: '81%', change: '+6% this quarter' },
  { label: 'Avg. order value', value: '$63', change: 'Hybrid buy/rent orders' }
];
