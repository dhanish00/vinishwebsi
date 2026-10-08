/* =========================================================
   STAYEASE - COMPLETE HOTEL BOOKING JAVASCRIPT
   Agoda-inspired hotel booking frontend
   ========================================================= */

"use strict";

/* =========================================================
   HOTEL DATABASE
   ========================================================= */

const hotels = [
  {
    id: 1,
    name: "The Taj Palace",
    location: "New Delhi, India",
    type: "Hotel",
    rating: 4.8,
    reviews: 2456,
    price: 8500,
    oldPrice: 10500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    description:
      "A luxurious five-star hotel in the heart of New Delhi offering elegant rooms, fine dining and exceptional hospitality.",
    address: "Sardar Patel Marg, New Delhi",
    rooms: [
      {
        name: "Deluxe Room",
        price: 8500,
        beds: "1 King Bed",
        guests: 2,
        size: "32 m²"
      },
      {
        name: "Luxury Suite",
        price: 12500,
        beds: "1 King Bed",
        guests: 3,
        size: "48 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Room Service",
      "Parking",
      "Airport Transfer"
    ],
    highlights: [
      "Central location",
      "Luxury accommodation",
      "Multiple restaurants",
      "24-hour reception"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 2,
    name: "Grand Hyatt Mumbai",
    location: "Mumbai, Maharashtra",
    type: "Hotel",
    rating: 4.6,
    reviews: 3210,
    price: 9200,
    oldPrice: 11500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Contemporary luxury hotel in Mumbai featuring spacious rooms, restaurants, wellness facilities and a large swimming pool.",
    address: "Off Western Express Highway, Mumbai",
    rooms: [
      {
        name: "Grand King Room",
        price: 9200,
        beds: "1 King Bed",
        guests: 2,
        size: "35 m²"
      },
      {
        name: "Grand Suite",
        price: 14500,
        beds: "1 King Bed",
        guests: 3,
        size: "55 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Near airport",
      "Large outdoor pool",
      "Business facilities",
      "Multiple dining options"
    ],
    checkInTime: "3:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets allowed on request",
      smoking: "Smoking areas available"
    }
  },

  {
    id: 3,
    name: "The Leela Palace Bengaluru",
    location: "Bengaluru, Karnataka",
    type: "Hotel",
    rating: 4.7,
    reviews: 1987,
    price: 10500,
    oldPrice: 13500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    description:
      "Palatial luxury hotel in Bengaluru surrounded by landscaped gardens and offering world-class dining and spa facilities.",
    address: "HAL 2nd Stage, Bengaluru",
    rooms: [
      {
        name: "Premier Room",
        price: 10500,
        beds: "1 King Bed",
        guests: 2,
        size: "40 m²"
      },
      {
        name: "Royal Suite",
        price: 17500,
        beds: "1 King Bed",
        guests: 3,
        size: "70 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Royal architecture",
      "Beautiful gardens",
      "Luxury spa",
      "Premium restaurants"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 4,
    name: "Novotel Goa Resort",
    location: "Candolim, Goa",
    type: "Resort",
    rating: 4.5,
    reviews: 2845,
    price: 6800,
    oldPrice: 8500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=80",
    description:
      "Relaxing Goa resort close to Candolim Beach with tropical gardens, swimming pools and family-friendly facilities.",
    address: "Pinto Vaddo, Candolim, Goa",
    rooms: [
      {
        name: "Superior Room",
        price: 6800,
        beds: "1 King Bed",
        guests: 2,
        size: "30 m²"
      },
      {
        name: "Pool View Room",
        price: 8200,
        beds: "1 King Bed",
        guests: 3,
        size: "36 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Beach Access",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Close to beach",
      "Family friendly",
      "Swimming pool",
      "Tropical surroundings"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets allowed on request",
      smoking: "Designated smoking areas"
    }
  },

  {
    id: 5,
    name: "ITC Grand Chola",
    location: "Chennai, Tamil Nadu",
    type: "Hotel",
    rating: 4.8,
    reviews: 4112,
    price: 11000,
    oldPrice: 14000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Grand luxury hotel inspired by Chola architecture with exceptional restaurants, wellness facilities and spacious rooms.",
    address: "Mount Road, Chennai",
    rooms: [
      {
        name: "Executive Club Room",
        price: 11000,
        beds: "1 King Bed",
        guests: 2,
        size: "42 m²"
      },
      {
        name: "Presidential Suite",
        price: 24000,
        beds: "1 King Bed",
        guests: 4,
        size: "120 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Chola-inspired architecture",
      "Luxury dining",
      "Large swimming pools",
      "Business facilities"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 6,
    name: "Radisson Blu Jaipur",
    location: "Jaipur, Rajasthan",
    type: "Hotel",
    rating: 4.4,
    reviews: 1765,
    price: 5900,
    oldPrice: 7500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern five-star hotel in Jaipur with stylish rooms, rooftop dining and convenient access to the city's attractions.",
    address: "Durgapura, Jaipur",
    rooms: [
      {
        name: "Superior Room",
        price: 5900,
        beds: "1 King Bed",
        guests: 2,
        size: "32 m²"
      },
      {
        name: "Business Class Room",
        price: 7200,
        beds: "1 King Bed",
        guests: 2,
        size: "38 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Near airport",
      "Rooftop restaurant",
      "Modern interiors",
      "Business center"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 7,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, Rajasthan",
    type: "Resort",
    rating: 4.9,
    reviews: 1520,
    price: 28000,
    oldPrice: 35000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Iconic luxury resort overlooking Lake Pichola, designed like a royal Rajasthani palace with beautiful gardens and courtyards.",
    address: "Haridasji Ki Magri, Udaipur",
    rooms: [
      {
        name: "Premier Room",
        price: 28000,
        beds: "1 King Bed",
        guests: 2,
        size: "50 m²"
      },
      {
        name: "Luxury Suite",
        price: 42000,
        beds: "1 King Bed",
        guests: 3,
        size: "75 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Lake View",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Lake Pichola views",
      "Royal architecture",
      "Luxury spa",
      "Private courtyards"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 72 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking property"
    }
  },

  {
    id: 8,
    name: "Hyatt Regency Kolkata",
    location: "Kolkata, West Bengal",
    type: "Hotel",
    rating: 4.5,
    reviews: 2301,
    price: 6200,
    oldPrice: 7900,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description:
      "Upscale Kolkata hotel with modern rooms, gardens, restaurants, pool and excellent business facilities.",
    address: "JA-1 Sector III, Salt Lake, Kolkata",
    rooms: [
      {
        name: "Regency King Room",
        price: 6200,
        beds: "1 King Bed",
        guests: 2,
        size: "34 m²"
      },
      {
        name: "Regency Suite",
        price: 9500,
        beds: "1 King Bed",
        guests: 3,
        size: "55 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Business district",
      "Outdoor pool",
      "Large garden",
      "Multiple restaurants"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Smoking areas available"
    }
  },

  {
    id: 9,
    name: "Marriott Hotel Hyderabad",
    location: "Hyderabad, Telangana",
    type: "Hotel",
    rating: 4.6,
    reviews: 2105,
    price: 6400,
    oldPrice: 8200,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium hotel in Hyderabad offering comfortable rooms, fine dining, pool and modern business facilities.",
    address: "Tank Bund Road, Hyderabad",
    rooms: [
      {
        name: "Deluxe King Room",
        price: 6400,
        beds: "1 King Bed",
        guests: 2,
        size: "33 m²"
      },
      {
        name: "Executive Suite",
        price: 9800,
        beds: "1 King Bed",
        guests: 3,
        size: "58 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Lake views",
      "Business center",
      "Fine dining",
      "Fitness center"
    ],
    checkInTime: "3:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are allowed on request",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 10,
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    type: "Resort",
    rating: 4.9,
    reviews: 3540,
    price: 24000,
    oldPrice: 30000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    description:
      "A legendary palace hotel floating on Lake Pichola, offering spectacular views and royal hospitality.",
    address: "Pichola Lake, Udaipur",
    rooms: [
      {
        name: "Palace Room",
        price: 24000,
        beds: "1 King Bed",
        guests: 2,
        size: "35 m²"
      },
      {
        name: "Luxury Suite",
        price: 38000,
        beds: "1 King Bed",
        guests: 3,
        size: "65 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Boat Transfer",
      "Lake View",
      "Room Service",
      "Breakfast"
    ],
    highlights: [
      "Located on Lake Pichola",
      "Royal palace",
      "Boat transfers",
      "Spectacular lake views"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 72 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 11,
    name: "Holiday Inn Express Bengaluru",
    location: "Whitefield, Bengaluru",
    type: "Hotel",
    rating: 4.2,
    reviews: 1840,
    price: 3500,
    oldPrice: 4500,
    stars: 3,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description:
      "Comfortable and affordable hotel in Whitefield ideal for business travelers and short city stays.",
    address: "ITPL Main Road, Whitefield, Bengaluru",
    rooms: [
      {
        name: "Standard Room",
        price: 3500,
        beds: "1 Queen Bed",
        guests: 2,
        size: "22 m²"
      },
      {
        name: "Standard Twin Room",
        price: 3900,
        beds: "2 Single Beds",
        guests: 2,
        size: "24 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Gym",
      "Parking",
      "Breakfast",
      "Air Conditioning"
    ],
    highlights: [
      "Affordable",
      "Near IT parks",
      "Breakfast included",
      "Business friendly"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 12,
    name: "The Westin Pune",
    location: "Pune, Maharashtra",
    type: "Hotel",
    rating: 4.5,
    reviews: 1988,
    price: 6100,
    oldPrice: 7800,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stylish five-star Pune hotel featuring spacious rooms, restaurants, wellness facilities and modern amenities.",
    address: "Koregaon Park Annexe, Pune",
    rooms: [
      {
        name: "Deluxe Room",
        price: 6100,
        beds: "1 King Bed",
        guests: 2,
        size: "37 m²"
      },
      {
        name: "Club Room",
        price: 7800,
        beds: "1 King Bed",
        guests: 2,
        size: "42 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Premium rooms",
      "Fitness facilities",
      "Business services",
      "Multiple restaurants"
    ],
    checkInTime: "3:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 24 hours",
      children: "Children are welcome",
      pets: "Pets allowed on request",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 13,
    name: "Taj Exotica Resort & Spa",
    location: "Goa, India",
    type: "Resort",
    rating: 4.8,
    reviews: 2675,
    price: 14500,
    oldPrice: 18000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    description:
      "Beachside luxury resort in Goa surrounded by tropical gardens and offering a peaceful escape.",
    address: "Benaulim Beach, Goa",
    rooms: [
      {
        name: "Garden Villa",
        price: 14500,
        beds: "1 King Bed",
        guests: 2,
        size: "45 m²"
      },
      {
        name: "Luxury Villa",
        price: 19000,
        beds: "1 King Bed",
        guests: 3,
        size: "65 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Beach Access",
      "Tennis Court",
      "Breakfast"
    ],
    highlights: [
      "Beachfront location",
      "Tropical gardens",
      "Luxury spa",
      "Large pool"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Designated smoking areas"
    }
  },

  {
    id: 14,
    name: "W Goa",
    location: "Vagator, Goa",
    type: "Resort",
    rating: 4.6,
    reviews: 2360,
    price: 15500,
    oldPrice: 19500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Trendy beachfront resort overlooking Vagator with stylish rooms, vibrant dining and a lively atmosphere.",
    address: "Vagator Beach, Goa",
    rooms: [
      {
        name: "Wonderful Garden View",
        price: 15500,
        beds: "1 King Bed",
        guests: 2,
        size: "40 m²"
      },
      {
        name: "Spectacular Ocean View",
        price: 19000,
        beds: "1 King Bed",
        guests: 3,
        size: "48 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Beach Access",
      "Bar",
      "Gym",
      "Breakfast"
    ],
    highlights: [
      "Vagator Beach",
      "Ocean views",
      "Modern design",
      "Beach club atmosphere"
    ],
    checkInTime: "3:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets allowed on request",
      smoking: "Designated smoking areas"
    }
  },

  {
    id: 15,
    name: "Kumarakom Lake Resort",
    location: "Kumarakom, Kerala",
    type: "Resort",
    rating: 4.7,
    reviews: 1890,
    price: 9800,
    oldPrice: 12500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Traditional Kerala-style luxury resort located beside the tranquil backwaters of Kumarakom.",
    address: "Kumarakom, Kerala",
    rooms: [
      {
        name: "Garden Villa",
        price: 9800,
        beds: "1 King Bed",
        guests: 2,
        size: "45 m²"
      },
      {
        name: "Lake View Villa",
        price: 13500,
        beds: "1 King Bed",
        guests: 3,
        size: "55 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Lake View",
      "Boat Ride",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Kerala backwaters",
      "Traditional architecture",
      "Ayurvedic spa",
      "Boat rides"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 16,
    name: "Marari Beach Resort",
    location: "Alappuzha, Kerala",
    type: "Resort",
    rating: 4.6,
    reviews: 1675,
    price: 8700,
    oldPrice: 11000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Peaceful beach resort with traditional Kerala villas, tropical gardens and direct beach access.",
    address: "Marari Beach, Kerala",
    rooms: [
      {
        name: "Garden Villa",
        price: 8700,
        beds: "1 King Bed",
        guests: 2,
        size: "42 m²"
      },
      {
        name: "Deluxe Pool Villa",
        price: 12500,
        beds: "1 King Bed",
        guests: 3,
        size: "60 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Beach Access",
      "Yoga",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Private beach access",
      "Traditional villas",
      "Yoga sessions",
      "Tropical gardens"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  },

  {
    id: 17,
    name: "The Tamara Coorg",
    location: "Coorg, Karnataka",
    type: "Resort",
    rating: 4.8,
    reviews: 1450,
    price: 12000,
    oldPrice: 15500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury plantation resort in Coorg surrounded by coffee estates, forests and spectacular mountain scenery.",
    address: "Kabbinakad Estate, Coorg",
    rooms: [
      {
        name: "Luxury Cottage",
        price: 12000,
        beds: "1 King Bed",
        guests: 2,
        size: "50 m²"
      },
      {
        name: "Suite",
        price: 15500,
        beds: "1 King Bed",
        guests: 3,
        size: "70 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Mountain View",
      "Coffee Plantation",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Coffee plantation",
      "Mountain views",
      "Nature walks",
      "Luxury cottages"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    policies: {
      cancellation: "Free cancellation before 72 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking property"
    }
  },

  {
    id: 18,
    name: "Evolve Back Coorg",
    location: "Coorg, Karnataka",
    type: "Resort",
    rating: 4.9,
    reviews: 1740,
    price: 18000,
    oldPrice: 23000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury resort surrounded by coffee plantations offering private pools, villas and an immersive nature experience.",
    address: "Siddapura, Coorg",
    rooms: [
      {
        name: "Pool Hut",
        price: 18000,
        beds: "1 King Bed",
        guests: 2,
        size: "60 m²"
      },
      {
        name: "Pool Villa",
        price: 24000,
        beds: "1 King Bed",
        guests: 3,
        size: "90 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Private Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Coffee Plantation",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Private pools",
      "Coffee estate",
      "Luxury villas",
      "Nature activities"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    policies: {
      cancellation: "Free cancellation before 72 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking property"
    }
  },

  {
    id: 19,
    name: "Wildflower Hall",
    location: "Shimla, Himachal Pradesh",
    type: "Resort",
    rating: 4.8,
    reviews: 1330,
    price: 21000,
    oldPrice: 27000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury mountain retreat near Shimla surrounded by cedar forests and panoramic Himalayan views.",
    address: "Mashobra, Shimla",
    rooms: [
      {
        name: "Mountain View Room",
        price: 21000,
        beds: "1 King Bed",
        guests: 2,
        size: "38 m²"
      },
      {
        name: "Luxury Suite",
        price: 29000,
        beds: "1 King Bed",
        guests: 3,
        size: "65 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Indoor Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Mountain View",
      "Tennis",
      "Breakfast"
    ],
    highlights: [
      "Himalayan views",
      "Cedar forest",
      "Luxury spa",
      "Indoor heated pool"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 72 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking property"
    }
  },

  {
    id: 20,
    name: "Taj Aravali Resort & Spa",
    location: "Udaipur, Rajasthan",
    type: "Resort",
    rating: 4.7,
    reviews: 1560,
    price: 13500,
    oldPrice: 17500,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Contemporary luxury resort nestled in the Aravalli hills, offering spacious rooms, a large pool and wellness facilities.",
    address: "Sawai Madopur Road, Udaipur",
    rooms: [
      {
        name: "Deluxe Room",
        price: 13500,
        beds: "1 King Bed",
        guests: 2,
        size: "42 m²"
      },
      {
        name: "Luxury Suite",
        price: 19000,
        beds: "1 King Bed",
        guests: 3,
        size: "70 m²"
      }
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Mountain View",
      "Parking",
      "Breakfast"
    ],
    highlights: [
      "Aravalli hills",
      "Large swimming pool",
      "Luxury spa",
      "Family friendly"
    ],
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    policies: {
      cancellation: "Free cancellation before 48 hours",
      children: "Children are welcome",
      pets: "Pets are not allowed",
      smoking: "Non-smoking rooms available"
    }
  }
];

/* =========================================================
   GLOBAL STATE
   ========================================================= */

let filteredHotels = [...hotels];

let selectedHotel = null;
let selectedRoom = null;

let guests = {
  adults: 2,
  children: 0,
  rooms: 1
};

let currentSort = "recommended";

let wishlist = JSON.parse(
  localStorage.getItem("stayeaseWishlist") || "[]"
);

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRatingText(rating) {
  if (rating >= 4.8) return "Exceptional";
  if (rating >= 4.5) return "Excellent";
  if (rating >= 4.0) return "Very Good";
  if (rating >= 3.5) return "Good";
  return "Pleasant";
}

function getAmenityIcon(name) {
  const icons = {
    "Free WiFi": "📶",
    "Swimming Pool": "🏊",
    "Indoor Pool": "🏊",
    "Private Pool": "🏊",
    Restaurant: "🍽️",
    Spa: "💆",
    Gym: "🏋️",
    Parking: "🅿️",
    Breakfast: "🥐",
    "Beach Access": "🏖️",
    "Lake View": "🌊",
    "Mountain View": "⛰️",
    "Room Service": "🛎️",
    "Airport Transfer": "✈️",
    Bar: "🍸",
    "Boat Ride": "⛵",
    "Boat Transfer": "⛵",
    Yoga: "🧘",
    "Coffee Plantation": "☕",
    Tennis: "🎾",
    "Air Conditioning": "❄️"
  };

  return icons[name] || "✓";
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN").format(price);
}

function getElement(id) {
  return document.getElementById(id);
}

function safeAddEventListener(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler);
  }
}

function closeModal(id) {
  const modal = getElement(id);

  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

function openModal(id) {
  const modal = getElement(id);

  if (modal) {
    modal.classList.add("active");
    modal.style.display = "flex";
  }
}

function showToast(message) {
  let toast = getElement("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";

    toast.style.cssText = `
      position: fixed;
      bottom: 25px;
      right: 25px;
      background: #222;
      color: white;
      padding: 14px 20px;
      border-radius: 10px;
      z-index: 99999;
      font-size: 14px;
      box-shadow: 0 5px 20px rgba(0,0,0,.2);
      transition: .3s;
    `;

    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.style.opacity = "0";
  }, 2500);
}

/* =========================================================
   AUTOMATIC PAGE CONTAINER
   ========================================================= */

function ensureHotelContainer() {
  let container =
    getElement("hotelList") ||
    getElement("hotelGrid") ||
    getElement("hotelsList") ||
    getElement("results");

  if (container) return container;

  container = document.createElement("div");
  container.id = "hotelList";

  container.style.cssText = `
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
  `;

  const main =
    document.querySelector("main") ||
    document.querySelector(".main-content") ||
    document.body;

  main.appendChild(container);

  return container;
}

/* =========================================================
   CREATE BASIC STYLING
   ========================================================= */

function addDynamicStyles() {
  if (getElement("stayeaseDynamicStyles")) return;

  const style = document.createElement("style");

  style.id = "stayeaseDynamicStyles";

  style.textContent = `
    .stayease-hotel-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }

    .stayease-hotel-card {
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      box-shadow: 0 4px 15px rgba(0,0,0,.07);
      transition: .25s;
      cursor: pointer;
    }

    .stayease-hotel-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,.12);
    }

    .stayease-image-wrap {
      position: relative;
      height: 220px;
      overflow: hidden;
    }

    .stayease-hotel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .stayease-wishlist {
      position: absolute;
      right: 12px;
      top: 12px;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 50%;
      background: white;
      font-size: 21px;
      cursor: pointer;
      z-index: 3;
    }

    .stayease-discount {
      position: absolute;
      left: 12px;
      top: 12px;
      background: #d63031;
      color: white;
      padding: 6px 10px;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 700;
    }

    .stayease-card-content {
      padding: 18px;
    }

    .stayease-hotel-type {
      font-size: 12px;
      color: #777;
      text-transform: uppercase;
      font-weight: 700;
    }

    .stayease-hotel-name {
      font-size: 20px;
      margin: 6px 0;
      color: #222;
    }

    .stayease-location {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .stayease-rating {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #087f5b;
      color: white;
      padding: 5px 8px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 700;
    }

    .stayease-review {
      color: #777;
      font-size: 13px;
      margin-left: 6px;
    }

    .stayease-stars {
      margin: 8px 0;
      color: #f5a623;
    }

    .stayease-description {
      color: #666;
      line-height: 1.5;
      font-size: 14px;
      min-height: 42px;
    }

    .stayease-price-row {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-top: 15px;
      gap: 10px;
    }

    .stayease-old-price {
      text-decoration: line-through;
      color: #999;
      font-size: 13px;
    }

    .stayease-price {
      font-size: 23px;
      font-weight: 800;
      color: #222;
    }

    .stayease-night {
      font-size: 12px;
      color: #777;
    }

    .stayease-view-btn {
      background: #0057ff;
      color: white;
      border: 0;
      padding: 11px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 700;
    }

    .stayease-view-btn:hover {
      background: #0045c7;
    }

    .stayease-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.6);
      z-index: 99990;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .stayease-modal.active {
      display: flex;
    }

    .stayease-modal-box {
      background: white;
      width: min(1000px, 100%);
      max-height: 92vh;
      overflow-y: auto;
      border-radius: 18px;
      position: relative;
    }

    .stayease-close {
      position: absolute;
      right: 15px;
      top: 15px;
      width: 38px;
      height: 38px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.95);
      cursor: pointer;
      font-size: 22px;
      z-index: 5;
    }

    .stayease-modal-hero {
      height: 340px;
      width: 100%;
      object-fit: cover;
    }

    .stayease-details {
      padding: 25px;
    }

    .stayease-details h2 {
      font-size: 30px;
      margin: 5px 0;
    }

    .stayease-section {
      margin-top: 25px;
    }

    .stayease-section h3 {
      margin-bottom: 12px;
    }

    .stayease-amenities {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 10px;
    }

    .stayease-amenity {
      padding: 10px;
      background: #f7f7f7;
      border-radius: 8px;
    }

    .stayease-room {
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      align-items: center;
    }

    .stayease-room-price {
      font-size: 20px;
      font-weight: 800;
    }

    .stayease-book {
      background: #ff5a1f;
      color: white;
      border: 0;
      border-radius: 8px;
      padding: 12px 18px;
      font-weight: 700;
      cursor: pointer;
    }

    .stayease-empty {
      text-align: center;
      padding: 60px 20px;
      color: #666;
    }

    .stayease-filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }

    .stayease-filter-bar select,
    .stayease-filter-bar input {
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    @media(max-width: 700px) {
      .stayease-hotel-grid {
        grid-template-columns: 1fr;
      }

      .stayease-modal-hero {
        height: 220px;
      }

      .stayease-details h2 {
        font-size: 23px;
      }

      .stayease-room {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   RENDER HOTEL LIST
   ========================================================= */

function renderHotels(list = filteredHotels) {
  const container = ensureHotelContainer();

  if (!container) return;

  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `
      <div class="stayease-empty">
        <h2>No hotels found</h2>
        <p>Try changing your search or filters.</p>
        <button class="stayease-view-btn" onclick="resetFilters()">
          Show All Hotels
        </button>
      </div>
    `;

    return;
  }

  const grid = document.createElement("div");

  grid.className = "stayease-hotel-grid";

  list.forEach((hotel) => {
    const isSaved = wishlist.includes(hotel.id);

    const discount = Math.round(
      ((hotel.oldPrice - hotel.price) / hotel.oldPrice) * 100
    );

    const card = document.createElement("article");

    card.className = "stayease-hotel-card";

    card.innerHTML = `
      <div class="stayease-image-wrap">

        <img
          class="stayease-hotel-image"
          src="${escapeHTML(hotel.image)}"
          alt="${escapeHTML(hotel.name)}"
          loading="lazy"
        />

        <span class="stayease-discount">
          ${discount}% OFF
        </span>

        <button
          class="stayease-wishlist"
          data-wishlist="${hotel.id}"
          title="Add to wishlist"
        >
          ${isSaved ? "❤️" : "♡"}
        </button>

      </div>

      <div class="stayease-card-content">

        <div class="stayease-hotel-type">
          ${escapeHTML(hotel.type)} · ${"★".repeat(hotel.stars)}
        </div>

        <h2 class="stayease-hotel-name">
          ${escapeHTML(hotel.name)}
        </h2>

        <div class="stayease-location">
          📍 ${escapeHTML(hotel.location)}
        </div>

        <div>
          <span class="stayease-rating">
            ${hotel.rating} ★
          </span>

          <span class="stayease-review">
            ${formatPrice(hotel.reviews)} reviews
          </span>
        </div>

        <div class="stayease-stars">
          ${"★".repeat(hotel.stars)}
        </div>

        <p class="stayease-description">
          ${escapeHTML(hotel.description)}
        </p>

        <div class="stayease-price-row">

          <div>
            <div class="stayease-old-price">
              ₹${formatPrice(hotel.oldPrice)}
            </div>

            <div class="stayease-price">
              ₹${formatPrice(hotel.price)}
            </div>

            <div class="stayease-night">
              per night
            </div>
          </div>

          <button
            class="stayease-view-btn"
            data-hotel="${hotel.id}"
          >
            View Details
          </button>

        </div>

      </div>
    `;

    grid.appendChild(card);
  });

  container.appendChild(grid);

  attachHotelEvents();
}

/* =========================================================
   HOTEL CARD EVENTS
   ========================================================= */

function attachHotelEvents() {
  document
    .querySelectorAll("[data-hotel]")
    .forEach((button) => {
      button.addEventListener("click", function (event) {
        event.stopPropagation();

        const id = Number(this.dataset.hotel);

        openHotelDetails(id);
      });
    });

  document
    .querySelectorAll("[data-wishlist]")
    .forEach((button) => {
      button.addEventListener("click", function (event) {
        event.stopPropagation();

        toggleWishlist(Number(this.dataset.wishlist));
      });
    });
}

/* =========================================================
   HOTEL DETAILS
   ========================================================= */

function openHotelDetails(id) {
  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    showToast("Hotel not found");
    return;
  }

  selectedHotel = hotel;

  let modal = getElement("hotelDetailsModal");

  if (!modal) {
    modal = document.createElement("div");

    modal.id = "hotelDetailsModal";

    modal.className = "stayease-modal";

    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="stayease-modal-box">

      <button
        class="stayease-close"
        onclick="closeHotelDetails()"
      >
        ×
      </button>

      <img
        class="stayease-modal-hero"
        src="${escapeHTML(hotel.image)}"
        alt="${escapeHTML(hotel.name)}"
      />

      <div class="stayease-details">

        <div class="stayease-hotel-type">
          ${escapeHTML(hotel.type)}
          ·
          ${"★".repeat(hotel.stars)}
        </div>

        <h2>${escapeHTML(hotel.name)}</h2>

        <p>
          📍 ${escapeHTML(hotel.location)}
        </p>

        <p>
          ${escapeHTML(hotel.address)}
        </p>

        <div>
          <span class="stayease-rating">
            ${hotel.rating} ★
          </span>

          <span class="stayease-review">
            ${formatPrice(hotel.reviews)} reviews ·
            ${getRatingText(hotel.rating)}
          </span>
        </div>

        <div class="stayease-section">

          <h3>About this property</h3>

          <p>
            ${escapeHTML(hotel.description)}
          </p>

        </div>

        <div class="stayease-section">

          <h3>Property highlights</h3>

          <div class="stayease-amenities">

            ${hotel.highlights
              .map(
                (item) => `
                  <div class="stayease-amenity">
                    ⭐ ${escapeHTML(item)}
                  </div>
                `
              )
              .join("")}

          </div>

        </div>

        <div class="stayease-section">

          <h3>Amenities</h3>

          <div class="stayease-amenities">

            ${hotel.amenities
              .map(
                (item) => `
                  <div class="stayease-amenity">
                    ${getAmenityIcon(item)}
                    ${escapeHTML(item)}
                  </div>
                `
              )
              .join("")}

          </div>

        </div>

        <div class="stayease-section">

          <h3>Available rooms</h3>

          ${hotel.rooms
            .map(
              (room, index) => `
                <div class="stayease-room">

                  <div>
                    <strong>
                      ${escapeHTML(room.name)}
                    </strong>

                    <p>
                      🛏️ ${escapeHTML(room.beds)}
                      · 👥 ${room.guests} guests
                      · 📐 ${room.size}
                    </p>
                  </div>

                  <div>
                    <div class="stayease-room-price">
                      ₹${formatPrice(room.price)}
                    </div>

                    <small>per night</small>

                    <br><br>

                    <button
                      class="stayease-book"
                      onclick="bookHotelRoom(${hotel.id}, ${index})"
                    >
                      Book Now
                    </button>
                  </div>

                </div>
              `
            )
            .join("")}

        </div>

        <div class="stayease-section">

          <h3>Check-in & Check-out</h3>

          <p>
            🕑 Check-in: ${escapeHTML(hotel.checkInTime)}
          </p>

          <p>
            🕛 Check-out: ${escapeHTML(hotel.checkOutTime)}
          </p>

        </div>

        <div class="stayease-section">

          <h3>Policies</h3>

          <p>
            ❌ ${escapeHTML(hotel.policies.cancellation)}
          </p>

          <p>
            👨‍👩‍👧 ${escapeHTML(hotel.policies.children)}
          </p>

          <p>
            🐾 ${escapeHTML(hotel.policies.pets)}
          </p>

          <p>
            🚭 ${escapeHTML(hotel.policies.smoking)}
          </p>

        </div>

      </div>

    </div>
  `;

  modal.style.display = "flex";
  modal.classList.add("active");

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeHotelDetails();
    }
  });
}

function closeHotelDetails() {
  closeModal("hotelDetailsModal");
}

/* =========================================================
   BOOK HOTEL ROOM
   ========================================================= */

function bookHotelRoom(hotelId, roomIndex) {
  const hotel = hotels.find(
    (item) => item.id === Number(hotelId)
  );

  if (!hotel || !hotel.rooms[roomIndex]) {
    showToast("Room not found");
    return;
  }

  selectedHotel = hotel;
  selectedRoom = hotel.rooms[roomIndex];

  closeHotelDetails();

  openBookingModal();
}

/* =========================================================
   BOOKING MODAL
   ========================================================= */

function openBookingModal() {
  let modal = getElement("bookingModal");

  if (!modal) {
    modal = document.createElement("div");

    modal.id = "bookingModal";
    modal.className = "stayease-modal";

    document.body.appendChild(modal);
  }

  const hotel = selectedHotel;
  const room = selectedRoom;

  modal.innerHTML = `
    <div class="stayease-modal-box">

      <button
        class="stayease-close"
        onclick="closeBookingModal()"
      >
        ×
      </button>

      <div class="stayease-details">

        <h2>Complete Your Booking</h2>

        <p>
          <strong>${escapeHTML(hotel.name)}</strong>
        </p>

        <p>
          ${escapeHTML(room.name)}
        </p>

        <hr>

        <form id="stayeaseBookingForm">

          <label>Full Name</label>

          <input
            id="bookingName"
            type="text"
            required
            placeholder="Enter your full name"
            style="width:100%;padding:12px;margin:8px 0 15px"
          >

          <label>Email</label>

          <input
            id="bookingEmail"
            type="email"
            required
            placeholder="Enter your email"
            style="width:100%;padding:12px;margin:8px 0 15px"
          >

          <label>Check-in</label>

          <input
            id="bookingCheckIn"
            type="date"
            required
            style="width:100%;padding:12px;margin:8px 0 15px"
          >

          <label>Check-out</label>

          <input
            id="bookingCheckOut"
            type="date"
            required
            style="width:100%;padding:12px;margin:8px 0 15px"
          >

          <label>Guests</label>

          <input
            type="text"
            value="${guests.adults} Adults, ${guests.children} Children"
            readonly
            style="width:100%;padding:12px;margin:8px 0 15px"
          >

          <div style="
            background:#f7f7f7;
            padding:15px;
            border-radius:10px;
            margin:15px 0;
          ">

            <strong>Price</strong>

            <div style="font-size:24px;margin-top:5px">
              ₹${formatPrice(room.price)}
              <small>/ night</small>
            </div>

          </div>

          <button
            type="submit"
            class="stayease-book"
            style="width:100%"
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  `;

  modal.style.display = "flex";
  modal.classList.add("active");

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const checkIn = getElement("bookingCheckIn");
  const checkOut = getElement("bookingCheckOut");

  if (checkIn) {
    checkIn.min = today;
  }

  if (checkOut) {
    checkOut.min = today;
  }

  const form = getElement("stayeaseBookingForm");

  safeAddEventListener(form, "submit", function (event) {
    event.preventDefault();

    const name = getElement("bookingName")?.value.trim();
    const email = getElement("bookingEmail")?.value.trim();
    const inDate = getElement("bookingCheckIn")?.value;
    const outDate = getElement("bookingCheckOut")?.value;

    if (!name || !email || !inDate || !outDate) {
      showToast("Please complete all fields");
      return;
    }

    if (new Date(outDate) <= new Date(inDate)) {
      showToast("Check-out must be after check-in");
      return;
    }

    showToast(
      `Booking confirmed for ${name}!`
    );

    closeBookingModal();

    setTimeout(() => {
      alert(
        `Booking Confirmed!\n\nHotel: ${hotel.name}\nRoom: ${room.name}\nGuest: ${name}\nEmail: ${email}`
      );
    }, 300);
  });
}

function closeBookingModal() {
  closeModal("bookingModal");
}

/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(id) {
  const index = wishlist.indexOf(id);

  if (index === -1) {
    wishlist.push(id);
    showToast("Added to wishlist ❤️");
  } else {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  }

  localStorage.setItem(
    "stayeaseWishlist",
    JSON.stringify(wishlist)
  );

  renderHotels(filteredHotels);
}

function showWishlist() {
  filteredHotels = hotels.filter((hotel) =>
    wishlist.includes(hotel.id)
  );

  renderHotels(filteredHotels);
}

/* =========================================================
   SEARCH
   ========================================================= */

function searchHotels() {
  const searchInput =
    getElement("searchInput") ||
    getElement("destination") ||
    getElement("search");

  const query = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  if (!query) {
    filteredHotels = [...hotels];
  } else {
    filteredHotels = hotels.filter((hotel) => {
      return (
        hotel.name.toLowerCase().includes(query) ||
        hotel.location.toLowerCase().includes(query) ||
        hotel.type.toLowerCase().includes(query) ||
        hotel.description.toLowerCase().includes(query)
      );
    });
  }

  applySorting();

  renderHotels(filteredHotels);
}

/* =========================================================
   SEARCH INPUT EVENTS
   ========================================================= */

function setupSearch() {
  const inputs = [
    getElement("searchInput"),
    getElement("destination"),
    getElement("search")
  ].filter(Boolean);

  inputs.forEach((input) => {
    safeAddEventListener(input, "input", searchHotels);

    safeAddEventListener(input, "keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        searchHotels();
      }
    });
  });

  const searchButtons = document.querySelectorAll(
    "#searchButton, #searchBtn, [data-search]"
  );

  searchButtons.forEach((button) => {
    safeAddEventListener(button, "click", searchHotels);
  });
}

/* =========================================================
   FILTERS
   ========================================================= */

function applyFilters() {
  const price =
    Number(
      getElement("priceFilter")?.value ||
      getElement("maxPrice")?.value ||
      Infinity
    );

  const rating =
    Number(
      getElement("ratingFilter")?.value || 0
    );

  const type =
    getElement("typeFilter")?.value || "";

  const star =
    Number(
      getElement("starFilter")?.value || 0
    );

  const amenity =
    getElement("amenityFilter")?.value || "";

  const searchInput =
    getElement("searchInput") ||
    getElement("destination") ||
    getElement("search");

  const query =
    searchInput?.value
      ?.trim()
      .toLowerCase() || "";

  filteredHotels = hotels.filter((hotel) => {

    const matchesSearch =
      !query ||
      hotel.name.toLowerCase().includes(query) ||
      hotel.location.toLowerCase().includes(query) ||
      hotel.type.toLowerCase().includes(query);

    const matchesPrice =
      !price ||
      price === Infinity ||
      hotel.price <= price;

    const matchesRating =
      !rating ||
      hotel.rating >= rating;

    const matchesType =
      !type ||
      type === "all" ||
      hotel.type.toLowerCase() === type.toLowerCase();

    const matchesStar =
      !star ||
      hotel.stars >= star;

    const matchesAmenity =
      !amenity ||
      hotel.amenities.some(
        (item) =>
          item.toLowerCase() === amenity.toLowerCase()
      );

    return (
      matchesSearch &&
      matchesPrice &&
      matchesRating &&
      matchesType &&
      matchesStar &&
      matchesAmenity
    );
  });

  applySorting();

  renderHotels(filteredHotels);
}

/* =========================================================
   SORTING
   ========================================================= */

function applySorting() {
  if (currentSort === "priceLow") {
    filteredHotels.sort(
      (a, b) => a.price - b.price
    );
  }

  if (currentSort === "priceHigh") {
    filteredHotels.sort(
      (a, b) => b.price - a.price
    );
  }

  if (currentSort === "rating") {
    filteredHotels.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (currentSort === "reviews") {
    filteredHotels.sort(
      (a, b) => b.reviews - a.reviews
    );
  }

  if (currentSort === "recommended") {
    filteredHotels.sort((a, b) => {
      const scoreA =
        a.rating * 100 + a.reviews / 100;

      const scoreB =
        b.rating * 100 + b.reviews / 100;

      return scoreB - scoreA;
    });
  }
}

function setupSorting() {
  const sort =
    getElement("sortSelect") ||
    getElement("sortBy");

  safeAddEventListener(sort, "change", function () {
    currentSort = this.value;

    applySorting();

    renderHotels(filteredHotels);
  });
}

/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {
  const ids = [
    "priceFilter",
    "maxPrice",
    "ratingFilter",
    "typeFilter",
    "starFilter",
    "amenityFilter"
  ];

  ids.forEach((id) => {
    const element = getElement(id);

    if (element) {
      element.value = "";
    }
  });

  const searchInput =
    getElement("searchInput") ||
    getElement("destination") ||
    getElement("search");

  if (searchInput) {
    searchInput.value = "";
  }

  filteredHotels = [...hotels];

  currentSort = "recommended";

  applySorting();

  renderHotels(filteredHotels);
}

/* =========================================================
   GUEST COUNTER
   ========================================================= */

function updateGuests() {
  const guestText =
    `${guests.adults} Adults, ` +
    `${guests.children} Children, ` +
    `${guests.rooms} Room${guests.rooms !== 1 ? "s" : ""}`;

  const elements = document.querySelectorAll(
    "#guestSummary, #guestText, #guests"
  );

  elements.forEach((element) => {
    element.textContent = guestText;
  });

  const adultCount = getElement("adultCount");
  const childCount = getElement("childCount");
  const roomCount = getElement("roomCount");

  if (adultCount) {
    adultCount.textContent = guests.adults;
  }

  if (childCount) {
    childCount.textContent = guests.children;
  }

  if (roomCount) {
    roomCount.textContent = guests.rooms;
  }
}

function changeGuest(type, amount) {
  if (type === "adults") {
    guests.adults = Math.max(
      1,
      Math.min(10, guests.adults + amount)
    );
  }

  if (type === "children") {
    guests.children = Math.max(
      0,
      Math.min(8, guests.children + amount)
    );
  }

  if (type === "rooms") {
    guests.rooms = Math.max(
      1,
      Math.min(5, guests.rooms + amount)
    );
  }

  updateGuests();
}

/* =========================================================
   PROMO CODE
   ========================================================= */

function applyPromo() {
  const input =
    getElement("promoCode") ||
    getElement("promoInput");

  if (!input) {
    showToast("Enter a promo code");
    return;
  }

  const code = input.value.trim().toUpperCase();

  if (code === "WELCOME500") {
    showToast("₹500 promo discount applied!");
    return;
  }

  if (code === "STAY20") {
    if (!selectedHotel) {
      showToast("Select a hotel before applying STAY20");
      return;
    }

    showToast("20% discount applied!");
    return;
  }

  showToast("Invalid promo code");
}

/* =========================================================
   LOGIN + TWO-FACTOR AUTHENTICATION
   ========================================================= */

let pendingTwoFactorCode = null;
let pendingTwoFactorEmail = null;

function generateTwoFactorCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length < 12) {
    return { score, label: "Too weak", valid: false };
  }

  if (score <= 2) {
    return { score, label: "Weak", valid: false };
  }

  if (score === 3) {
    return { score, label: "Fair", valid: false };
  }

  if (score === 4) {
    return { score, label: "Strong", valid: true };
  }

  return { score, label: "Very strong", valid: true };
}

function updatePasswordStrength() {
  const input = getElement("loginPassword");
  const meter = getElement("passwordStrength");
  const label = getElement("passwordStrengthLabel");

  if (!input || !meter || !label) return;

  const result = getPasswordStrength(input.value);

  meter.setAttribute("data-score", result.score);
  label.textContent = input.value
    ? result.label
    : "Use 12+ characters with uppercase, lowercase, number and symbol";

  label.className = "password-strength-label " +
    (result.valid ? "valid" : "invalid");
}

const ACTIVE_LOGIN_KEY = "stayease_active_login";
const ACTIVE_LOGIN_TIMEOUT = 2 * 60 * 1000;
let activeSessionId = null;
let activeSessionTimer = null;

function readActiveLogin() {
  try {
    const raw = localStorage.getItem(ACTIVE_LOGIN_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (!session?.email || !session?.sessionId || !session?.lastSeen) return null;
    if (Date.now() - session.lastSeen > ACTIVE_LOGIN_TIMEOUT) {
      localStorage.removeItem(ACTIVE_LOGIN_KEY);
      return null;
    }
    return session;
  } catch (error) {
    return null;
  }
}

function hasActiveLogin(email) {
  const active = readActiveLogin();
  return Boolean(active && active.email.toLowerCase() === email.toLowerCase());
}

function startActiveLogin(email) {
  activeSessionId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const update = () => {
    if (!activeSessionId) return;
    try {
      localStorage.setItem(ACTIVE_LOGIN_KEY, JSON.stringify({
        email,
        sessionId: activeSessionId,
        lastSeen: Date.now()
      }));
    } catch (error) {
      console.warn("Session tracking unavailable", error);
    }
  };
  update();
  clearInterval(activeSessionTimer);
  activeSessionTimer = setInterval(update, 30 * 1000);
}

function endActiveLogin() {
  try {
    const active = readActiveLogin();
    if (!activeSessionId || !active || active.sessionId === activeSessionId) {
      localStorage.removeItem(ACTIVE_LOGIN_KEY);
    }
  } catch (error) {
    // Ignore storage errors in demo mode.
  }
  activeSessionId = null;
  clearInterval(activeSessionTimer);
  activeSessionTimer = null;
}

function showMultipleLoginBlock(email) {
  const modal = getElement("loginModal");
  if (!modal) return;

  modal.innerHTML = `
    <div class="stayease-modal-box stayease-auth-box">
      <button class="stayease-close" onclick="closeLogin()" aria-label="Close sign in">×</button>
      <div class="stayease-details">
        <div class="auth-security-badge">🛡️ Session protected</div>
        <h2>Already signed in</h2>
        <p>This account already has an active StayEase session on another tab or device.</p>
        <div class="multi-login-warning">
          <strong>Multiple login prevention</strong>
          <span>For your security, another sign-in is blocked while the existing session is active.</span>
        </div>
        <button class="stayease-book auth-submit" type="button" id="endOtherSession">
          End the other session
        </button>
        <button class="auth-back-btn" type="button" id="cancelMultipleLogin">
          Cancel
        </button>
        <p class="auth-demo-note">
          Demo protection uses browser storage. Production systems must enforce concurrent-session limits on the server.
        </p>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  modal.classList.add("active");

  safeAddEventListener(getElement("endOtherSession"), "click", function () {
    try { localStorage.removeItem(ACTIVE_LOGIN_KEY); } catch (error) {}
    showToast("Previous session ended. You can sign in now.");
    openLogin(true);
  });

  safeAddEventListener(getElement("cancelMultipleLogin"), "click", closeLogin);
}

function openLogin(forceNewSession = false) {
  let modal = getElement("loginModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "loginModal";
    modal.className = "stayease-modal";
    document.body.appendChild(modal);
  }

  if (!forceNewSession) {
    const existingEmail = getElement("loginEmail")?.value.trim();
    if (existingEmail && hasActiveLogin(existingEmail)) {
      showMultipleLoginBlock(existingEmail);
      return;
    }
  }

  modal.innerHTML = `
    <div class="stayease-modal-box stayease-auth-box">

      <button class="stayease-close" onclick="closeLogin()" aria-label="Close sign in">×</button>

      <div class="stayease-details">

        <div class="auth-security-badge">🔐 Two-factor protected</div>

        <h2>Sign In</h2>

        <p>Sign in to manage your bookings and wishlist.</p>

        <form id="loginForm">

          <label for="loginEmail">Email address</label>
          <input
            id="loginEmail"
            type="email"
            placeholder="you@example.com"
            autocomplete="username"
            required
          >

          <label for="loginPassword">Password</label>
          <input
            id="loginPassword"
            type="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            minlength="12"
            required
          >

          <div class="password-strength-wrap" aria-live="polite">
            <div class="password-strength-meter" id="passwordStrength" data-score="0">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <small id="passwordStrengthLabel" class="password-strength-label invalid">
              Use 12+ characters with uppercase, lowercase, number and symbol
            </small>
          </div>

          <ul class="password-rules" id="passwordRules">
            <li data-rule="length">At least 12 characters</li>
            <li data-rule="lower">One lowercase letter</li>
            <li data-rule="upper">One uppercase letter</li>
            <li data-rule="number">One number</li>
            <li data-rule="symbol">One special character</li>
          </ul>

          <button class="stayease-book auth-submit" type="submit">
            Continue
          </button>

        </form>

        <div class="auth-trust-note">
          <span>🛡️</span>
          <div>
            <strong>Extra security</strong>
            <small>You'll verify a 6-digit code after your password.</small>
          </div>
        </div>

        <p class="auth-demo-note">
          Demo mode: the verification code is generated locally.
          A production site must send and verify this code on a secure backend.
        </p>

      </div>
    </div>
  `;

  modal.style.display = "flex";
  modal.classList.add("active");

  const passwordInput = getElement("loginPassword");

  safeAddEventListener(passwordInput, "input", function () {
    const value = this.value;
    const checks = {
      length: value.length >= 12,
      lower: /[a-z]/.test(value),
      upper: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
      symbol: /[^A-Za-z0-9]/.test(value)
    };

    Object.entries(checks).forEach(([rule, passed]) => {
      const item = document.querySelector(`[data-rule="${rule}"]`);
      if (item) {
        item.classList.toggle("passed", passed);
      }
    });

    updatePasswordStrength();
  });

  safeAddEventListener(getElement("loginForm"), "submit", function (event) {
    event.preventDefault();

    const email = getElement("loginEmail")?.value.trim();
    const password = getElement("loginPassword")?.value;

    if (!email || !password) {
      showToast("Enter your email and password");
      return;
    }

    const passwordStrength = getPasswordStrength(password);

    if (!passwordStrength.valid) {
      showToast("Choose a stronger password before continuing");
      getElement("loginPassword")?.focus();
      updatePasswordStrength();
      return;
    }

    if (hasActiveLogin(email)) {
      showMultipleLoginBlock(email);
      return;
    }

    // Demo-only second factor. A browser-generated OTP is not real
    // authentication and must not be used in production.
    pendingTwoFactorEmail = email;
    pendingTwoFactorCode = generateTwoFactorCode();

    openTwoFactorStep();
  });
}

function openTwoFactorStep() {
  const modal = getElement("loginModal");
  if (!modal) return;

  const maskedEmail = maskEmail(pendingTwoFactorEmail);

  modal.innerHTML = `
    <div class="stayease-modal-box stayease-auth-box">

      <button class="stayease-close" onclick="closeLogin()" aria-label="Close verification">×</button>

      <div class="stayease-details">

        <div class="auth-step-indicator">
          <span class="done">✓</span>
          <span class="line"></span>
          <span class="current">2</span>
        </div>

        <div class="auth-security-badge">🔐 Verification required</div>

        <h2>Verify it's you</h2>

        <p>
          Enter the 6-digit verification code sent to
          <strong>${escapeHTML(maskedEmail)}</strong>.
        </p>

        <form id="twoFactorForm">

          <label for="twoFactorCode">Verification code</label>

          <input
            id="twoFactorCode"
            class="two-factor-input"
            type="text"
            inputmode="numeric"
            autocomplete="one-time-code"
            maxlength="6"
            pattern="[0-9]{6}"
            placeholder="000000"
            aria-label="6-digit verification code"
            required
          >

          <button class="stayease-book auth-submit" type="submit">
            Verify & Sign In
          </button>

        </form>

        <div class="auth-demo-code">
          <span>Demo verification code</span>
          <strong>${pendingTwoFactorCode}</strong>
        </div>

        <button class="auth-back-btn" type="button" id="backToLogin">
          ← Back to sign in
        </button>

        <p class="auth-demo-note">
          Demo mode only. For real security, generate the OTP on your server,
          deliver it through email/SMS or use an authenticator app, then verify
          it server-side with rate limiting and expiration.
        </p>

      </div>
    </div>
  `;

  modal.style.display = "flex";
  modal.classList.add("active");

  const codeInput = getElement("twoFactorCode");

  safeAddEventListener(codeInput, "input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 6);
  });

  safeAddEventListener(getElement("twoFactorForm"), "submit", function (event) {
    event.preventDefault();

    const enteredCode = getElement("twoFactorCode")?.value.trim();

    if (enteredCode !== pendingTwoFactorCode) {
      showToast("Invalid verification code");
      codeInput?.focus();
      return;
    }

    const signedInEmail = pendingTwoFactorEmail;
    startActiveLogin(signedInEmail);
    pendingTwoFactorCode = null;
    pendingTwoFactorEmail = null;

    showToast("Signed in securely with 2FA!");
    closeLogin();
  });

  safeAddEventListener(getElement("backToLogin"), "click", function () {
    pendingTwoFactorCode = null;
    pendingTwoFactorEmail = null;
    openLogin();
  });

  codeInput?.focus();
}

function maskEmail(email) {
  if (!email || !email.includes("@")) return "your email";

  const parts = email.split("@");
  const name = parts[0];
  const domain = parts.slice(1).join("@");
  const visible = name.length <= 2 ? name.charAt(0) : name.slice(0, 2);

  return `${visible}${"*".repeat(Math.max(2, name.length - visible.length))}@${domain}`;
}

function closeLogin() {
  pendingTwoFactorCode = null;
  pendingTwoFactorEmail = null;
  closeModal("loginModal");
}

function logoutStayEase() {
  endActiveLogin();
  closeLogin();
  showToast("You have been signed out.");
}


window.addEventListener("storage", function (event) {
  if (event.key !== ACTIVE_LOGIN_KEY || !activeSessionId) return;
  const active = readActiveLogin();
  if (!active || active.sessionId !== activeSessionId) {
    endActiveLogin();
    showToast("Your session was ended because another login was started.");
  }
});

/* =========================================================
   NEWSLETTER
   ========================================================= */

function setupNewsletter() {
  const form =
    getElement("newsletterForm");

  safeAddEventListener(
    form,
    "submit",
    function (event) {
      event.preventDefault();

      const input =
        form.querySelector("input[type='email']");

      if (!input || !input.value.trim()) {
        showToast("Please enter your email");
        return;
      }

      showToast(
        "Thank you for subscribing!"
      );

      form.reset();
    }
  );
}

/* =========================================================
   DESTINATION SUGGESTIONS
   ========================================================= */

function setupDestinationSuggestions() {
  const input =
    getElement("destination") ||
    getElement("searchInput");

  if (!input) return;

  let suggestionBox =
    getElement("destinationSuggestions");

  if (!suggestionBox) {
    suggestionBox =
      document.createElement("div");

    suggestionBox.id =
      "destinationSuggestions";

    suggestionBox.style.cssText = `
      position:absolute;
      top:100%;
      left:0;
      right:0;
      background:white;
      border:1px solid #ddd;
      border-radius:10px;
      z-index:9999;
      box-shadow:0 8px 20px rgba(0,0,0,.12);
      overflow:hidden;
    `;

    const parent =
      input.parentElement;

    if (
      parent &&
      getComputedStyle(parent).position === "static"
    ) {
      parent.style.position = "relative";
    }

    parent?.appendChild(
      suggestionBox
    );
  }

  safeAddEventListener(
    input,
    "input",
    function () {
      const query =
        input.value.trim().toLowerCase();

      suggestionBox.innerHTML = "";

      if (!query) {
        suggestionBox.style.display =
          "none";
        return;
      }

      const locations = [
        ...new Set(
          hotels.map(
            (hotel) => hotel.location
          )
        )
      ];

      const matches =
        locations
          .filter((location) =>
            location
              .toLowerCase()
              .includes(query)
          )
          .slice(0, 7);

      matches.forEach((location) => {
        const item =
          document.createElement("div");

        item.textContent =
          `📍 ${location}`;

        item.style.cssText = `
          padding:12px;
          cursor:pointer;
          border-bottom:1px solid #eee;
        `;

        item.addEventListener(
          "click",
          function () {
            input.value = location;

            suggestionBox.style.display =
              "none";

            searchHotels();
          }
        );

        suggestionBox.appendChild(item);
      });

      suggestionBox.style.display =
        matches.length
          ? "block"
          : "none";
    }
  );
}

/* =========================================================
   DEAL BUTTONS
   ========================================================= */

function setupDealButtons() {
  document
    .querySelectorAll(
      "[data-deal], .deal-button, .deal-card button"
    )
    .forEach((button) => {
      safeAddEventListener(
        button,
        "click",
        function () {
          const code =
            this.dataset.deal ||
            "WELCOME500";

          const promo =
            getElement("promoCode") ||
            getElement("promoInput");

          if (promo) {
            promo.value = code;
          }

          showToast(
            `Promo code ${code} selected`
          );
        }
      );
    });
}

/* =========================================================
   DESTINATION CARDS
   ========================================================= */

function setupDestinationCards() {
  document
    .querySelectorAll(
      "[data-destination]"
    )
    .forEach((element) => {
      safeAddEventListener(
        element,
        "click",
        function () {
          const destination =
            this.dataset.destination;

          const input =
            getElement("destination") ||
            getElement("searchInput");

          if (input) {
            input.value =
              destination;
          }

          searchHotels();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      );
    });
}

/* =========================================================
   LIST / MAP TOGGLE
   ========================================================= */

function setupViewToggle() {
  const listButton =
    getElement("listView");

  const mapButton =
    getElement("mapView");

  safeAddEventListener(
    listButton,
    "click",
    function () {
      const container =
        ensureHotelContainer();

      container.style.display =
        "block";

      renderHotels(filteredHotels);
    }
  );

  safeAddEventListener(
    mapButton,
    "click",
    function () {
      const container =
        ensureHotelContainer();

      container.innerHTML = `
        <div style="
          padding:70px 20px;
          text-align:center;
          background:#f5f5f5;
          border-radius:15px;
        ">
          <h2>🗺️ Map View</h2>
          <p>
            Interactive map view can be connected
            to Google Maps later.
          </p>

          <button
            class="stayease-view-btn"
            onclick="renderHotels(filteredHotels)"
          >
            Back to List
          </button>
        </div>
      `;
    }
  );
}

/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {
  const button =
    getElement("mobileMenuButton") ||
    getElement("mobileMenuToggle");

  const menu =
    getElement("mobileMenu");

  safeAddEventListener(
    button,
    "click",
    function () {
      if (!menu) return;

      menu.classList.toggle(
        "active"
      );

      menu.style.display =
        menu.classList.contains("active")
          ? "block"
          : "none";
    }
  );
}

/* =========================================================
   GLOBAL BUTTON HANDLERS
   ========================================================= */

function setupButtons() {
  const loginButtons =
    document.querySelectorAll(
      "#openLogin, #loginButton, #mobileLogin, [data-login]"
    );

  loginButtons.forEach((button) => {
    safeAddEventListener(
      button,
      "click",
      openLogin
    );
  });

  const promoButtons =
    document.querySelectorAll(
      "#applyPromo, #promoButton"
    );

  promoButtons.forEach((button) => {
    safeAddEventListener(
      button,
      "click",
      applyPromo
    );
  });

  const wishlistButtons =
    document.querySelectorAll(
      "#wishlistButton, [data-wishlist-page]"
    );

  wishlistButtons.forEach((button) => {
    safeAddEventListener(
      button,
      "click",
      showWishlist
    );
  });

  document
    .querySelectorAll(
      "[data-guest-plus]"
    )
    .forEach((button) => {
      safeAddEventListener(
        button,
        "click",
        () => {
          changeGuest(
            button.dataset.guestPlus,
            1
          );
        }
      );
    });

  document
    .querySelectorAll(
      "[data-guest-minus]"
    )
    .forEach((button) => {
      safeAddEventListener(
        button,
        "click",
        () => {
          changeGuest(
            button.dataset.guestMinus,
            -1
          );
        }
      );
    });

  safeAddEventListener(
    getElement("guestDone"),
    "click",
    function () {
      updateGuests();

      const popup =
        getElement("guestPopup");

      if (popup) {
        popup.style.display =
          "none";
      }
    }
  );
}

/* =========================================================
   FILTER EVENT LISTENERS
   ========================================================= */

function setupFilters() {
  [
    "priceFilter",
    "maxPrice",
    "ratingFilter",
    "typeFilter",
    "starFilter",
    "amenityFilter"
  ].forEach((id) => {
    const element =
      getElement(id);

    safeAddEventListener(
      element,
      "change",
      applyFilters
    );
  });

  document
    .querySelectorAll(
      "[data-filter]"
    )
    .forEach((element) => {
      safeAddEventListener(
        element,
        "click",
        function () {
          applyFilters();
        }
      );
    });
}

/* =========================================================
   CREATE SIMPLE HEADER IF NEEDED
   ========================================================= */

function createHotelListingHeader() {
  const container =
    ensureHotelContainer();

  if (!container) return;

  if (
    getElement(
      "stayeaseListingHeader"
    )
  ) {
    return;
  }

  const header =
    document.createElement("div");

  header.id =
    "stayeaseListingHeader";

  header.style.cssText = `
    margin-bottom:20px;
  `;

  header.innerHTML = `
    <div style="
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:15px;
      flex-wrap:wrap;
    ">

      <div>
        <h1 style="margin:0">
          Hotels & Resorts
        </h1>

        <p style="margin:6px 0;color:#666">
          Find your perfect stay in India
        </p>
      </div>

      <div style="
        display:flex;
        gap:8px;
        flex-wrap:wrap;
      ">

        <select
          id="sortSelect"
          style="
            padding:10px;
            border:1px solid #ddd;
            border-radius:8px;
          "
        >
          <option value="recommended">
            Recommended
          </option>

          <option value="priceLow">
            Price: Low to High
          </option>

          <option value="priceHigh">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>

          <option value="reviews">
            Most Reviewed
          </option>
        </select>

        <button
          class="stayease-view-btn"
          onclick="resetFilters()"
        >
          Reset
        </button>

      </div>

    </div>
  `;

  container.parentElement.insertBefore(
    header,
    container
  );

  setupSorting();
}

/* =========================================================
   HOTEL COUNT
   ========================================================= */

function updateHotelCount() {
  const countElements =
    document.querySelectorAll(
      "#hotelCount, #resultCount, .hotel-count"
    );

  countElements.forEach(
    (element) => {
      element.textContent =
        `${filteredHotels.length} hotels`;
    }
  );
}

/* =========================================================
   WATCH FILTER RENDER
   ========================================================= */

const originalRenderHotels =
  renderHotels;

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeStayEase() {
  try {
    addDynamicStyles();

    ensureHotelContainer();

    createHotelListingHeader();

    filteredHotels = [...hotels];

    applySorting();

    renderHotels(filteredHotels);

    updateGuests();

    setupSearch();

    setupDestinationSuggestions();

    setupFilters();

    setupSorting();

    setupNewsletter();

    setupDealButtons();

    setupDestinationCards();

    setupViewToggle();

    setupMobileMenu();

    setupButtons();

    updateHotelCount();

    console.log(
      `StayEase loaded successfully: ${hotels.length} hotels`
    );
  } catch (error) {
    console.error(
      "StayEase initialization error:",
      error
    );

    showToast(
      "Some page features could not be loaded."
    );
  }
}

/* =========================================================
   DOM READY
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    initializeStayEase
  );
} else {
  initializeStayEase();
}

/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.hotels = hotels;
window.filteredHotels = filteredHotels;

window.renderHotels = renderHotels;
window.openHotelDetails = openHotelDetails;
window.closeHotelDetails = closeHotelDetails;

window.bookHotelRoom = bookHotelRoom;

window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;

window.toggleWishlist = toggleWishlist;
window.showWishlist = showWishlist;

window.searchHotels = searchHotels;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;

window.applyPromo = applyPromo;

window.changeGuest = changeGuest;
window.updateGuests = updateGuests;

window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.logoutStayEase = logoutStayEase;

window.showToast = showToast;

/* =========================================================
   END
   ========================================================= */