const properties = [
  {
    id: "1",
    name: "Urbanza Suites",
    location: "Los Angeles, California, USA",
    rating: 4.1,
    reviews: 120,
    price: 33200,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
    ],
    description: "Luxury suites with modern interiors and city skyline views.",
    amenities: ["Free WiFi", "Breakfast", "Room Service"]
  },
  {
    id: "2",
    name: "Ocean Breeze Villa",
    location: "Goa, India",
    rating: 4.7,
    reviews: 98,
    price: 18500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    description: "Beachfront villa with private pool and ocean view.",
    amenities: ["Pool", "Free WiFi", "Breakfast"]
  },
  {
    id: "3",
    name: "Mountain View Cabin",
    location: "Manali, India",
    rating: 4.8,
    reviews: 150,
    price: 15000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
    ],
    description: "Peaceful wooden cabin surrounded by mountains.",
    amenities: ["Fireplace", "Hiking Trails", "Parking"]
  },
  {
    id: "4",
    name: "Skyline Apartments",
    location: "New York, USA",
    rating: 3.5,
    reviews: 210,
    price: 37500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1522098543979-ffc7f79d1f3a",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    ],
    description: "Modern high-rise apartments in the heart of NYC.",
    amenities: ["Gym", "WiFi", "City View"]
  },
  {
    id: "5",
    name: "Royal Heritage Hotel",
    location: "Jaipur, India",
    rating: 4.9,
    reviews: 320,
    price: 25000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    ],
    description: "Luxury heritage stay with royal architecture.",
    amenities: ["Pool", "Spa", "Breakfast"]
  },
  {
    id: "6",
    name: "Green Valley Resort",
    location: "Ooty, India",
    rating: 4.5,
    reviews: 140,
    price: 13500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
    ],
    description: "Surrounded by tea gardens and misty hills.",
    amenities: ["Nature View", "Bonfire", "Breakfast"]
  },
  {
    id: "7",
    name: "Desert Camp Stay",
    location: "Jaisalmer, India",
    rating: 3,
    reviews: 88,
    price: 10000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a24",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
    ],
    description: "Luxury desert camping with cultural shows.",
    amenities: ["Camel Safari", "Bonfire", "Dinner"]
  },
  {
    id: "8",
    name: "Tokyo Capsule Hotel",
    location: "Tokyo, Japan",
    rating: 3,
    reviews: 260,
    price: 7500,
    per: "night",
    images: [
     
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
       "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    ],
    description: "Modern capsule living experience in Tokyo.",
    amenities: ["WiFi", "Locker", "Shared Lounge"]
  },
  {
    id: "9",
    name: "Seaside Paradise",
    location: "Maldives",
    rating: 5.0,
    reviews: 410,
    price: 75000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    ],
    description: "Private overwater villas with crystal clear water.",
    amenities: ["Private Pool", "Beach Access", "Spa"]
  },
  {
    id: "10",
    name: "London Central Stay",
    location: "London, UK",
    rating: 5,
    reviews: 190,
    price: 29000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    ],
    description: "Stay in the heart of London near major attractions.",
    amenities: ["WiFi", "Breakfast", "Metro Access"]
  },
  {
    id: "11",
    name: "Backwaters Houseboat",
    location: "Alleppey, Kerala, India",
    rating: 4.6,
    reviews: 175,
    price: 16000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    ],
    description: "Serene houseboat experience on Kerala backwaters.",
    amenities: ["Boat Ride", "Breakfast", "Fishing"]
  },
  {
    id: "12",
    name: "Dubai Sky Tower",
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: 305,
    price: 62000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    ],
    description: "Ultra-luxury tower stay with Burj Khalifa views.",
    amenities: ["Pool", "Gym", "City View"]
  },
  {
    id: "13",
    name: "Coorg Jungle Lodge",
    location: "Coorg, Karnataka, India",
    rating: 4.3,
    reviews: 112,
    price: 11500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ],
    description: "Eco lodge nestled in coffee plantations and jungle.",
    amenities: ["Nature Walk", "Bonfire", "Organic Meals"]
  },
  {
    id: "14",
    name: "Paris Boutique Inn",
    location: "Paris, France",
    rating: 4.4,
    reviews: 230,
    price: 28000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ],
    description: "Charming boutique hotel near the Eiffel Tower.",
    amenities: ["Breakfast", "WiFi", "Concierge"]
  },
  {
    id: "15",
    name: "Rishikesh Riverside Camp",
    location: "Rishikesh, Uttarakhand, India",
    rating: 4.2,
    reviews: 95,
    price: 8500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    description: "Camping by the Ganges with yoga and rafting.",
    amenities: ["River Rafting", "Yoga", "Bonfire"]
  },
  {
    id: "16",
    name: "Santorini Sunset Villa",
    location: "Santorini, Greece",
    rating: 5.0,
    reviews: 380,
    price: 68000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    ],
    description: "Iconic blue-dome villa with stunning caldera views.",
    amenities: ["Private Pool", "Sea View", "Breakfast"]
  },
  {
    id: "17",
    name: "Shimla Pine Cottage",
    location: "Shimla, Himachal Pradesh, India",
    rating: 4.0,
    reviews: 134,
    price: 9500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
    ],
    description: "Cozy pine cottage with snow views and warm fireplace.",
    amenities: ["Fireplace", "Mountain View", "Parking"]
  },
  {
    id: "18",
    name: "Bali Bamboo Retreat",
    location: "Ubud, Bali, Indonesia",
    rating: 4.6,
    reviews: 200,
    price: 14000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    description: "Eco bamboo retreat surrounded by rice terraces.",
    amenities: ["Yoga", "Spa", "Organic Breakfast"]
  },
  {
    id: "19",
    name: "Kolkata Heritage Mansion",
    location: "Kolkata, West Bengal, India",
    rating: 3.8,
    reviews: 67,
    price: 7800,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    ],
    description: "Colonial-era mansion with vintage decor and charm.",
    amenities: ["Breakfast", "Library", "Garden"]
  },
  {
    id: "20",
    name: "Singapore Marina Hotel",
    location: "Singapore",
    rating: 4.7,
    reviews: 290,
    price: 42000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ],
    description: "Iconic hotel with rooftop infinity pool overlooking Marina Bay.",
    amenities: ["Infinity Pool", "Gym", "City View"]
  },
  {
    id: "21",
    name: "Udaipur Lake Palace",
    location: "Udaipur, Rajasthan, India",
    rating: 4.9,
    reviews: 345,
    price: 45000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    ],
    description: "Floating palace hotel on Lake Pichola with royal experience.",
    amenities: ["Pool", "Spa", "Lake View"]
  },
  {
    id: "22",
    name: "Darjeeling Tea Bungalow",
    location: "Darjeeling, West Bengal, India",
    rating: 4.3,
    reviews: 89,
    price: 10500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
    ],
    description: "Colonial tea bungalow with Kanchenjunga views.",
    amenities: ["Tea Tasting", "Mountain View", "Breakfast"]
  },
  {
    id: "23",
    name: "New Zealand Farm Stay",
    location: "Queenstown, New Zealand",
    rating: 4.5,
    reviews: 160,
    price: 22000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59"
    ],
    description: "Scenic farm stay with adventure sports nearby.",
    amenities: ["Hiking", "Parking", "Farm Breakfast"]
  },
  {
    id: "24",
    name: "Varanasi Ghats Homestay",
    location: "Varanasi, Uttar Pradesh, India",
    rating: 3.9,
    reviews: 74,
    price: 6500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ],
    description: "Authentic riverside homestay with Ganga aarti views.",
    amenities: ["River View", "Breakfast", "Boat Ride"]
  },
  {
    id: "25",
    name: "Bangkok Rooftop Hotel",
    location: "Bangkok, Thailand",
    rating: 4.4,
    reviews: 215,
    price: 19500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    ],
    description: "Trendy rooftop hotel in the heart of Bangkok.",
    amenities: ["Rooftop Pool", "Bar", "City View"]
  },
  {
    id: "26",
    name: "Andaman Beach Resort",
    location: "Port Blair, Andaman, India",
    rating: 4.6,
    reviews: 182,
    price: 17500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    description: "Beachfront resort with snorkeling and water sports.",
    amenities: ["Beach Access", "Snorkeling", "Breakfast"]
  },
  {
    id: "27",
    name: "Tuscany Vineyard Stay",
    location: "Tuscany, Italy",
    rating: 4.8,
    reviews: 270,
    price: 38000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    ],
    description: "Rustic vineyard villa with wine tasting and rolling hills.",
    amenities: ["Wine Tasting", "Pool", "Breakfast"]
  },
  {
    id: "28",
    name: "Spiti Valley Monastery Stay",
    location: "Spiti, Himachal Pradesh, India",
    rating: 4.1,
    reviews: 56,
    price: 7000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
    ],
    description: "Unique monastery-style stay in the remote Spiti Valley.",
    amenities: ["Meditation", "Mountain View", "Local Meals"]
  },
  {
    id: "29",
    name: "Cape Town Clifftop Lodge",
    location: "Cape Town, South Africa",
    rating: 4.7,
    reviews: 198,
    price: 32000,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    ],
    description: "Clifftop lodge with panoramic Atlantic Ocean views.",
    amenities: ["Ocean View", "Pool", "Breakfast"]
  },
  {
    id: "30",
    name: "Munnar Mist Villa",
    location: "Munnar, Kerala, India",
    rating: 4.5,
    reviews: 143,
    price: 12500,
    per: "night",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59"
    ],
    description: "Misty hill villa surrounded by tea estates and waterfalls.",
    amenities: ["Nature Walk", "Tea Tasting", "Breakfast"]
  }
];

export default properties;