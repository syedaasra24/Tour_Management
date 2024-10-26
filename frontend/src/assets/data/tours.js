import tourImg01 from "../images/tour-01.jpg";
import tourImg02 from "../images/tour-02.jpg";
import tourImg03 from "../images/tour-03.jpg";
import tourImg04 from "../images/tour-04.jpg";
import tourImg05 from "../images/tour-05.jpg";
import tourImg06 from "../images/tour-06.jpg";
import tourImg07 from "../images/tour-07.jpg";
import tourImg08 from "../images/tour-08.jpg";
import tourImg09 from "../images/tour-09.jpg";
import tourImg10 from "../images/tour-10.jpg";
import tourImg11 from "../images/tour-11.jpg";
import tourImg12 from "../images/tour-12.jpg";
import tourImg13 from "../images/tour-13.jpg";
import tourImg14 from "../images/tour-14.jpg";
import tourImg15 from "../images/tour-15.jpg";
import tourImg16 from "../images/tour-16.jpg";
import tourImg17 from "../images/tour-17.jpg";
import tourImg18 from "../images/tour-18.jpg";
import tourImg19 from "../images/tour-19.jpg";
import tourImg20 from "../images/tour-20.jpg";




const tours = [
  {
    id: "01",
    title: "Munnar Tea Valley",
    city: "Kerela",
    distance: 300,
    address:"Somewhere",
    price: 70000,
    maxGroupSize: 10,
    desc: "Munnar Tea Valley in Kerala is a breathtaking hill station known for its lush green tea plantations, misty mountains, and tranquil beauty.",
    reviews: [
      {
        name: "Mukesh roy",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Taj Mahal",
    city: "Agra",
    distance: 400,
    address:"Somewhere",
    price:  50000,
    maxGroupSize: 8,
    desc: "The Taj Mahal in Agra is a magnificent white marble mausoleum, celebrated worldwide as a symbol of eternal love and architectural beauty.",
    reviews: [
      {
        name: "Aditi Sharma",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Pahalgam",
    city: "Jammu & Kashmir",
    distance: 500,
    address:"Somewhere",
    price: 70000,
    maxGroupSize: 8,
    desc: "Pahalgam in Jammu & Kashmir is a scenic town nestled in the Lidder Valley, known for its lush meadows, pine forests, and stunning Himalayan views.",
    reviews: [
      {
        name: "Kriti Sen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Kodaikanal",
    city: "Chennai",
    distance: 500,
    address:"Somewhere",
    price: 35000,
    maxGroupSize: 8,
    desc: "Kodaikanal is a serene hill station in Tamil Nadu, not in Chennai, known for its misty mountains, lush forests, and beautiful lakes.",
    reviews: [
      {
        name: "Polomi Roy",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nahagrah Fort",
    city: "Jaipur",
    distance: 500,
    address:"Somewhere",
    price: 50000,
    maxGroupSize: 8,
    desc: "Nahargarh Fort in Jaipur offers panoramic views of the city and once served as a defense fort for the royal family.",
    reviews: [
      {
        name: "Mohit Sharma ",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Jaisalmer Fort",
    city: "Rajasthan",
    distance: 500,
    address:"Somewhere",
    price: 100000,
    maxGroupSize: 8,
    desc: "Jaisalmer Fort, in Rajasthan, is a majestic, golden sandstone fortress rising from the Thar Desert.",
    reviews: [
      {
        name: "Anshu Raj",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "07",
    title: "Kufri",
    city: "shimla",
    distance: 500,
    address:"Somewhere",
    price: 40000,
    maxGroupSize: 8,
    desc: "Kufri, near Shimla, is a scenic hill station known for its snow-covered slopes, adventure sports, and Himalayan views.",
    reviews: [
      {
        name: "Ankita Chowdhury",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Yumthang Valley",
    city: "Sikkim",
    distance: 500,
    address:"Somewhere",
    price: 60000,
    maxGroupSize: 8,
    desc: "Yumthang Valley in Sikkim is a stunning alpine meadow renowned for its vibrant rhododendron blooms and breathtaking views of the surrounding Himalayan peaks.",
    reviews: [
      {
        name: "Saathi Paul",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
  {
    id: "09",
    title: "Hampi",
    city: "Karnataka",
    distance: 350,
    address: "Somewhere",
    price: 95000,
    maxGroupSize: 12,
    desc: "Explore the ruins of the Vijayanagara Empire with stunning ancient architecture.",
    reviews: [
      {
        name: "Asra Faisal",
        rating: 4.8,
      },
    ],
    avgRating: 4.7,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "10",
    title: "Rann of Kutch",
    city: "Gujarat",
    distance: 400,
    address: "Somewhere",
    price: 105000,
    maxGroupSize: 15,
    desc: "Experience the vast white desert and vibrant culture at the Rann of Kutch.",
    reviews: [
      {
        name: "Bapon Paramanik",
        rating: 4.7,
      },
    ],
    avgRating: 4.6,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "11",
    title: "Meenakshi Temple",
    city: "Madurai",
    distance: 200,
    address: "Somewhere",
    price: 60000,
    maxGroupSize: 10,
    desc: "A beautiful Dravidian-style temple dedicated to Goddess Meenakshi.",
    reviews: [
      {
        name: "Rohit Dutta",
        rating: 4.9,
      },
    ],
    avgRating: 4.8,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "12",
    title: "Golden Temple",
    city: "Amritsar",
    distance: 450,
    address: "Somewhere",
    price: 85000,
    maxGroupSize: 8,
    desc: "A spiritual haven, the Golden Temple is the holiest Sikh gurdwara.",
    reviews: [
      {
        name: "Ankit Das",
        rating: 5.0,
      },
    ],
    avgRating: 4.9,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "13",
    title: "Khajuraho Temples",
    city: "Madhya Pradesh",
    distance: 370,
    address: "Somewhere",
    price: 70000,
    maxGroupSize: 6,
    desc: "Known for their intricate sculptures, these temples are a UNESCO World Heritage site.",
    reviews: [
      {
        name: "Amit Bose",
        rating: 4.8,
      },
    ],
    avgRating: 4.7,
    photo: tourImg13,
    featured: true,
  },
  {
    id: "14",
    title: "Dal Lake",
    city: "Srinagar",
    distance: 450,
    address: "Somewhere",
    price: 110000,
    maxGroupSize: 8,
    desc: "Famous for houseboats and shikara rides, Dal Lake offers serene beauty.",
    reviews: [
      {
        name: "Farhan",
        rating: 4.7,
      },
    ],
    avgRating: 4.6,
    photo: tourImg14,
    featured: true,
  },
  {
    id: "15",
    title: "Rishikesh",
    city: "Uttarakhand",
    distance: 400,
    address: "Somewhere",
    price: 90000,
    maxGroupSize: 10,
    desc: "The Yoga Capital of the World, Rishikesh offers adventure sports and spiritual retreats.",
    reviews: [
      {
        name: "Ravi Kumar",
        rating: 4.9,
      },
    ],
    avgRating: 4.8,
    photo: tourImg15,
    featured: true,
  },
  {
    id: "16",
    title: "Varanasi Ghats",
    city: "Varanasi",
    distance: 250,
    address: "Along the River Ganges",
    price: 85000,
    maxGroupSize: 12,
    desc: "A spiritual experience by the sacred River Ganges, Varanasi is known for its ancient ghats where pilgrims perform rituals and witness mesmerizing evening aartis.",
    reviews: [
      {
        name: "Manoj Singh",
        rating: 5.0
      }
    ],
    avgRating: 4.9,
    photo: tourImg16,
    featured: true,
    },
    
    {
      id: "17",
      title: "Sundarbans National Park",
      city: "West Bengal",
      distance: 450,
      address: "Somewhere",
      price: 95000,
      maxGroupSize: 8,
      desc: "A UNESCO World Heritage site, the Sundarbans is known for its mangrove forests and Bengal tiger reserve.",
      reviews: [
        {
          name: "Priya Sen",
          rating: 4.7,
        },
      ],
      avgRating: 4.6,
      photo: tourImg17,
      featured: true,
    },


    {
      id: "18",
      title: "Sun Temple",
      city: "Konark",
      distance: 350,
      address: "Somewhere",
      price: 72000,
      maxGroupSize: 15,
      desc: "A UNESCO World Heritage site, known for its intricate stone carvings and chariot-like structure dedicated to the Sun God.",
      reviews: [
        {
          name: "Sayak Mukherjee",
          rating: 4.8,
        },
      ],
      avgRating: 4.7,
      photo: tourImg18,
      featured: true,
    },

    {
      id: "19",
      title: "Mahabalipuram Shore Temple",
      city: "Tamil Nadu",
      distance: 300,
      address: "Somewhere",
      price: 80000,
      maxGroupSize: 10,
      desc: "A beautiful ancient temple on the Bay of Bengal coast, known for its unique stone carvings and architecture.",
      reviews: [
        {
          name: "Sara  Biswas",
          rating: 4.7,
        },
      ],
      avgRating: 4.6,
      photo: tourImg19,
      featured: true,
    },

    {
      id: "20",
      title: "Andaman and Nicobar Islands",
      city: "Port Blair",
      distance: 1200,
      address: "Somewhere",
      price: 150000,
      maxGroupSize: 20,
      desc: "A tropical paradise with pristine beaches, coral reefs, and crystal-clear waters perfect for water sports and relaxation.",
      reviews: [
        {
          name: "Rohan Pal",
          rating: 4.9,
        },
      ],
      avgRating: 4.8,
      photo: tourImg20,
      featured: true,
    },
    
    

];

export default tours;