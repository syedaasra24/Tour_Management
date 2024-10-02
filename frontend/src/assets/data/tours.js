import tourImg01 from "../images/tour-01.jpg";
import tourImg02 from "../images/tour-02.jpg";
import tourImg03 from "../images/tour-03.jpg";
import tourImg04 from "../images/tour-04.jpg";
import tourImg05 from "../images/tour-05.jpg";
import tourImg06 from "../images/tour-06.jpg";
import tourImg07 from "../images/tour-07.jpg";
import tourImg08 from "../images/tour-08.jpg";


const tours = [
  {
    id: "01",
    title: "Munnar Tea Valley",
    city: "Kerela",
    distance: 300,
    price: 100000,
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
    price:  100000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "anshu",
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
    price: 120000,
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
    title: "Kodaikanal",
    city: "Chennai",
    distance: 500,
    price: 70000,
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
    title: " Nahagrah Fort",
    city: "Jaipur",
    distance: 500,
    price: 80000,
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
    title: "Jaisalmer Fort",
    city: "Rajasthan",
    distance: 500,
    price: 90000,
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
    title: "Kufri",
    city: "shimla",
    distance: 500,
    price: 100000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Yumthang Valley",
    city: "Sikkim",
    distance: 500,
    price: 80000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;