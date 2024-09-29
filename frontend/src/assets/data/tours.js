import tourImg01 from "../images/kerela.jpg";
import tourImg02 from "../images/agra.jpg";
import tourImg03 from "../images/kashmir.jpg";
import tourImg04 from "../images/darjeling.jpg";
import tourImg05 from "../images/jaipur.jpg";
import tourImg06 from "../images/rajasthan.jpg";
import tourImg07 from "../images/shimla.jpg";

const tours = [
  {
    id: "01",
    title: "Munnar Tea Valley",
    city: "Kerela",
    distance: 300,
    price: 2000000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
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
    price: 1000000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Jhon",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains,Kashmir",
    city: "srinagar",
    distance: 500,
    price: 1200000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Jaipur",
    city: "Jaipur",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Rajasthan",
    city: "Rajasthan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;