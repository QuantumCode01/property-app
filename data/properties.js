const properties = [
  {
    id: "1",
    name: "Urbanza Suites",
    location: "Los Angeles, USA",
    rating: 4.1,
    reviews: 120,
    price: 33200,
    per: "night",
    rooms: 3,
    description: "Modern luxury suites with skyline views and premium comfort.",
    amenities: ["WiFi", "Breakfast", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427"
    ]
  },
  {
    id: "2",
    name: "Ocean Breeze Villa",
    location: "Goa, India",
    rating: 4.7,
    reviews: 98,
    price: 18500,
    per: "night",
    rooms: 2,
    description: "Beachside villa with private pool and stunning ocean views.",
    amenities: ["Pool", "WiFi", "Breakfast"],
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format"
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
    description: "Peaceful wooden cabin surrounded by mountains and nature.",
    amenities: ["Fireplace", "Parking", "Mountain View"],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1551776235-dde6d4829808"
    ]
  },
  {
    id: "4",
    name: "Skyline Apartments",
    location: "New York, USA",
    rating: 3.5,
    reviews: 210,
    price: 37500,
    per: "night",
    rooms: 3,
    description: "High-rise apartments in the heart of the city.",
    amenities: ["Gym", "WiFi", "City View"],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
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
    description: "Royal palace-style hotel with heritage architecture.",
    amenities: ["Pool", "Spa", "Breakfast"],
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1578898886225-c7c894047899",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8"
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
    description: "Resort surrounded by greenery and peaceful hills.",
    amenities: ["Nature View", "Bonfire", "Breakfast"],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
    ]
  },


  {
    id: "7",
    name: "Desert Camp Stay",
    location: "Jaisalmer, India",
    rating: 3,
    reviews: 88,
    price: 10000,
    per: "night",
    rooms: 2,
    description: "Desert camping with cultural nights and safari.",
    amenities: ["Camel Safari", "Dinner", "Bonfire"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972"
    ]
  },
  {
    id: "8",
    name: "Tokyo Capsule Hotel",
    location: "Tokyo, Japan",
    rating: 3,
    reviews: 260,
    price: 7500,
    per: "night",
    rooms: 1,
    description: "Compact capsule stay with modern facilities.",
    amenities: ["WiFi", "Locker", "Shared Lounge"],
    images: [
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
    ]
  },
  {
    id: "9",
    name: "Seaside Paradise",
    location: "Maldives",
    rating: 5,
    reviews: 410,
    price: 75000,
    per: "night",
    rooms: 4,
    description: "Luxury overwater villas with private beach access.",
    amenities: ["Private Pool", "Beach Access", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972"
    ]
  },
  {
    id: "10",
    name: "London Central Stay",
    location: "London, UK",
    rating: 5,
    reviews: 190,
    price: 29000,
    per: "night",
    rooms: 3,
    description: "Stay near major attractions in central London.",
    amenities: ["WiFi", "Breakfast", "Metro Access"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
    ]
  }


];

export default properties;