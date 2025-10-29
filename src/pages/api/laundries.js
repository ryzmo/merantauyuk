// pages/api/laundries.js

export default function handler(req, res) {
  const laundries = [
    {
      id: 1,
      name: "Laundry Express UB",
      slug: "laundry-express-ub",
      price: 7000,
      location: "Lowokwaru",
      image: "/laundry/laundry1.jpg",
      services: ["Cuci + Setrika", "Antar Jemput", "Express 6 Jam"],
    },
    {
      id: 2,
      name: "Quick Wash Dinoyo",
      slug: "quick-wash-dinoyo",
      price: 6000,
      location: "Dinoyo",
      image: "/laundry/laundry2.jpg",
      services: ["Cuci Kering", "Setrika", "Cuci Sepatu"],
    },
    {
      id: 3,
      name: "Cahaya Laundry Blimbing",
      slug: "cahaya-laundry-blimbing",
      price: 8000,
      location: "Blimbing",
      image: "/laundry/laundry3.jpg",
      services: ["Cuci Basah", "Antar Jemput", "Express"],
    },
    {
      id: 4,
      name: "Eco Clean Laundry",
      slug: "eco-clean-laundry",
      price: 5500,
      location: "Sukun",
      image: "/laundry/laundry4.jpg",
      services: ["Cuci Kering", "Setrika", "Cuci Karpet"],
    },
    {
      id: 5,
      name: "Smart Laundry Tlogomas",
      slug: "smart-laundry-tlogomas",
      price: 6500,
      location: "Tlogomas",
      image: "/laundry/laundry5.jpg",
      services: ["Cuci + Setrika", "Express 1 Hari"],
    },
    {
      id: 6,
      name: "Perfect Clean Soehat",
      slug: "perfect-clean-soehat",
      price: 9000,
      location: "Soekarno Hatta",
      image: "/laundry/laundry6.jpg",
      services: ["Laundry Premium", "Antar Jemput", "Cuci Sepatu"],
    },
  ];

  res.status(200).json(laundries);
}
