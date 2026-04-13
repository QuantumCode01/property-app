const properties = [
  {
    id: "1",
    name: "Urbanza Suites",
    location: "Los Angeles, USA",
    rating: 4.2,
    reviews: 132,
    price: 32000,
    per: "night",
    rooms: 3,
    description: "Modern city hotel with skyline views and luxury interiors.",
    amenities: ["WiFi", "Gym", "Room Service"],
    images: [
      "https://picsum.photos/id/100/1200/800",
      "https://picsum.photos/id/101/1200/800",
      "https://picsum.photos/id/102/1200/800",
      "https://picsum.photos/id/103/1200/800"
    ]
  },
  {
    id: "2",
    name: "Ocean Breeze Villa",
    location: "Goa, India",
    rating: 4.7,
    reviews: 98,
    price: 18000,
    per: "night",
    rooms: 2,
    description: "Beachside villa with calm ocean breeze and private stay.",
    amenities: ["Pool", "WiFi", "Breakfast"],
    images: [
      "https://picsum.photos/id/104/1200/800",
      "https://picsum.photos/id/105/1200/800",
      "https://picsum.photos/id/106/1200/800",
      "https://picsum.photos/id/107/1200/800"
    ]
  },
  {
    id: "3",
    name: "Mountain View Cabin",
    location: "Manali, India",
    rating: 4.8,
    reviews: 150,
    price: 15000,
    per: "night",
    rooms: 4,
    description: "Wooden cabin surrounded by peaceful mountain views.",
    amenities: ["Fireplace", "Hiking", "Parking"],
    images: [
      "https://picsum.photos/id/108/1200/800",
      "https://picsum.photos/id/109/1200/800",
      "https://picsum.photos/id/110/1200/800",
      "https://picsum.photos/id/111/1200/800"
    ]
  },
  {
    id: "4",
    name: "Skyline Apartments",
    location: "New York, USA",
    rating: 3.9,
    reviews: 210,
    price: 38000,
    per: "night",
    rooms: 3,
    description: "Luxury high-rise apartments in downtown Manhattan.",
    amenities: ["Gym", "WiFi", "City View"],
    images: [
      "https://picsum.photos/id/112/1200/800",
      "https://picsum.photos/id/113/1200/800",
      "https://picsum.photos/id/114/1200/800",
      "https://picsum.photos/id/115/1200/800"
    ]
  },
  {
    id: "5",
    name: "Royal Heritage Hotel",
    location: "Jaipur, India",
    rating: 4.9,
    reviews: 320,
    price: 25000,
    per: "night",
    rooms: 4,
    description: "Royal palace-style heritage hotel with traditional charm.",
    amenities: ["Pool", "Spa", "Breakfast"],
    images: [
      "https://picsum.photos/id/116/1200/800",
      "https://picsum.photos/id/117/1200/800",
      "https://picsum.photos/id/118/1200/800",
      "https://picsum.photos/id/119/1200/800"
    ]
  },
  {
    id: "6",
    name: "Green Valley Resort",
    location: "Ooty, India",
    rating: 4.5,
    reviews: 140,
    price: 13500,
    per: "night",
    rooms: 2,
    description: "Surrounded by misty hills and tea gardens.",
    amenities: ["Nature View", "Bonfire", "Breakfast"],
    images: [
      "https://picsum.photos/id/120/1200/800",
      "https://picsum.photos/id/121/1200/800",
      "https://picsum.photos/id/122/1200/800",
      "https://picsum.photos/id/123/1200/800"
    ]
  },
  {
    id: "7",
    name: "Desert Camp Stay",
    location: "Jaisalmer, India",
    rating: 3.8,
    reviews: 88,
    price: 10000,
    per: "night",
    rooms: 2,
    description: "Luxury desert camping with cultural vibes.",
    amenities: ["Camel Safari", "Bonfire", "Dinner"],
    images: [
      "https://picsum.photos/id/124/1200/800",
      "https://picsum.photos/id/125/1200/800",
      "https://picsum.photos/id/126/1200/800",
      "https://picsum.photos/id/127/1200/800"
    ]
  },
  {
    id: "8",
    name: "Tokyo Capsule Hotel",
    location: "Tokyo, Japan",
    rating: 3.6,
    reviews: 260,
    price: 7500,
    per: "night",
    rooms: 1,
    description: "Compact capsule stay with modern Japanese design.",
    amenities: ["WiFi", "Locker", "Shared Lounge"],
    images: [
      "https://picsum.photos/id/128/1200/800",
      "https://picsum.photos/id/129/1200/800",
      "https://picsum.photos/id/130/1200/800",
      "https://picsum.photos/id/131/1200/800"
    ]
  },
  {
    id: "9",
    name: "Seaside Paradise",
    location: "Maldives",
    rating: 5.0,
    reviews: 410,
    price: 75000,
    per: "night",
    rooms: 4,
    description: "Luxury overwater villas with crystal clear ocean.",
    amenities: ["Private Pool", "Beach Access", "Spa"],
    images: [
      "https://picsum.photos/id/132/1200/800",
      "https://picsum.photos/id/133/1200/800",
      "https://picsum.photos/id/134/1200/800",
      "https://picsum.photos/id/135/1200/800"
    ]
  },
  {
    id: "10",
    name: "London Central Stay",
    location: "London, UK",
    rating: 4.8,
    reviews: 190,
    price: 29000,
    per: "night",
    rooms: 3,
    description: "Stay in central London near top attractions.",
    amenities: ["WiFi", "Breakfast", "Metro Access"],
    images: [
      "https://picsum.photos/id/136/1200/800",
      "https://picsum.photos/id/137/1200/800",
      "https://picsum.photos/id/138/1200/800",
      "https://picsum.photos/id/139/1200/800"
    ]
  },

  {
    id: "11",
    name: "Kerala Backwater House",
    location: "Alleppey, India",
    rating: 4.6,
    reviews: 175,
    price: 16000,
    per: "night",
    rooms: 2,
    description: "Houseboat stay on peaceful Kerala backwaters.",
    amenities: ["Boat Ride", "Breakfast", "Fishing"],
    images: [
      "https://picsum.photos/id/140/1200/800",
      "https://picsum.photos/id/141/1200/800",
      "https://picsum.photos/id/142/1200/800",
      "https://picsum.photos/id/143/1200/800"
    ]
  },
  {
    id: "12",
    name: "Dubai Sky Tower",
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: 305,
    price: 62000,
    per: "night",
    rooms: 4,
    description: "Ultra luxury tower stay with skyline views.",
    amenities: ["Pool", "Gym", "City View"],
    images: [
      "https://picsum.photos/id/144/1200/800",
      "https://picsum.photos/id/145/1200/800",
      "https://picsum.photos/id/146/1200/800",
      "https://picsum.photos/id/147/1200/800"
    ]
  },
  {
    id: "13",
    name: "Coorg Jungle Lodge",
    location: "Coorg, India",
    rating: 4.3,
    reviews: 112,
    price: 11500,
    per: "night",
    rooms: 3,
    description: "Eco lodge surrounded by coffee plantations.",
    amenities: ["Nature Walk", "Bonfire", "Organic Meals"],
    images: [
      "https://picsum.photos/id/148/1200/800",
      "https://picsum.photos/id/149/1200/800",
      "https://picsum.photos/id/150/1200/800",
      "https://picsum.photos/id/151/1200/800"
    ]
  },
  {
    id: "14",
    name: "Paris Boutique Inn",
    location: "Paris, France",
    rating: 4.4,
    reviews: 230,
    price: 28000,
    per: "night",
    rooms: 2,
    description: "Boutique hotel near Eiffel Tower.",
    amenities: ["Breakfast", "WiFi", "Concierge"],
    images: [
      "https://picsum.photos/id/152/1200/800",
      "https://picsum.photos/id/153/1200/800",
      "https://picsum.photos/id/154/1200/800",
      "https://picsum.photos/id/155/1200/800"
    ]
  },
  {
    id: "15",
    name: "Rishikesh Camp Stay",
    location: "Rishikesh, India",
    rating: 4.2,
    reviews: 95,
    price: 8500,
    per: "night",
    rooms: 2,
    description: "Camping by river with rafting and yoga.",
    amenities: ["River View", "Yoga", "Bonfire"],
    images: [
      "https://picsum.photos/id/156/1200/800",
      "https://picsum.photos/id/157/1200/800",
      "https://picsum.photos/id/158/1200/800",
      "https://picsum.photos/id/159/1200/800"
    ]
  },
  {
    id: "16",
    name: "Santorini Villa",
    location: "Greece",
    rating: 5.0,
    reviews: 380,
    price: 68000,
    per: "night",
    rooms: 4,
    description: "Iconic cliffside villa with sea views.",
    amenities: ["Private Pool", "Sea View", "Breakfast"],
    images: [
      "https://picsum.photos/id/160/1200/800",
      "https://picsum.photos/id/161/1200/800",
      "https://picsum.photos/id/162/1200/800",
      "https://picsum.photos/id/163/1200/800"
    ]
  },
  {
    id: "17",
    name: "Shimla Cottage",
    location: "Shimla, India",
    rating: 4.0,
    reviews: 134,
    price: 9500,
    per: "night",
    rooms: 3,
    description: "Cozy cottage with mountain views.",
    amenities: ["Fireplace", "Mountain View", "Parking"],
    images: [
      "https://picsum.photos/id/164/1200/800",
      "https://picsum.photos/id/165/1200/800",
      "https://picsum.photos/id/166/1200/800",
      "https://picsum.photos/id/167/1200/800"
    ]
  },
  {
    id: "18",
    name: "Bali Retreat",
    location: "Bali, Indonesia",
    rating: 4.6,
    reviews: 200,
    price: 14000,
    per: "night",
    rooms: 2,
    description: "Eco retreat surrounded by nature.",
    amenities: ["Yoga", "Spa", "Breakfast"],
    images: [
      "https://picsum.photos/id/168/1200/800",
      "https://picsum.photos/id/169/1200/800",
      "https://picsum.photos/id/170/1200/800",
      "https://picsum.photos/id/171/1200/800"
    ]
  },
  {
    id: "19",
    name: "Kolkata Heritage Mansion",
    location: "Kolkata, India",
    rating: 3.8,
    reviews: 67,
    price: 7800,
    per: "night",
    rooms: 3,
    description: "Colonial mansion with vintage charm.",
    amenities: ["Breakfast", "Library", "Garden"],
    images: [
      "https://picsum.photos/id/172/1200/800",
      "https://picsum.photos/id/173/1200/800",
      "https://picsum.photos/id/174/1200/800",
      "https://picsum.photos/id/175/1200/800"
    ]
  },
  {
    id: "20",
    name: "Singapore Marina Hotel",
    location: "Singapore",
    rating: 4.7,
    reviews: 290,
    price: 42000,
    per: "night",
    rooms: 4,
    description: "Luxury hotel with infinity pool.",
    amenities: ["Infinity Pool", "Gym", "City View"],
    images: [
      "https://picsum.photos/id/176/1200/800",
      "https://picsum.photos/id/177/1200/800",
      "https://picsum.photos/id/178/1200/800",
      "https://picsum.photos/id/179/1200/800"
    ]
  }
];

export default properties;