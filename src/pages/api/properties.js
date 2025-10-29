// pages/api/properties.js

export default function handler(req, res) {
  const properties = [
    {
      name: "Kos Griya Putri Anggrek",
      slug: "kos-griya-putri-anggrek",
      price: 850000,
      location: "Lowokwaru",
      image: "/kost.png",
      facilities: ["WiFi", "Kamar Mandi Dalam", "Dapur Bersama"],
    },
    {
      name: "Kost Pak Budi",
      slug: "kost-pak-budi",
      price: 1200000,
      location: "Sukun",
      image: "/kost.png",
      facilities: ["WiFi", "Air Panas", "Parkir Motor"],
    },
    {
      name: "Apartemen Soekarno Hatta",
      slug: "apartemen-soekarno-hatta",
      price: 2800000,
      location: "Soekarno Hatta",
      image: "/kost.png",
      facilities: ["AC", "WiFi", "Laundry"],
    },
    {
      name: "Kos Putra Mahasiswa UB",
      slug: "kos-putra-mahasiswa-ub",
      price: 950000,
      location: "Dinoyo",
      image: "/kost.png",
      facilities: ["WiFi", "Kamar Mandi Dalam", "Dapur Bersama"],
    },
    {
      name: "Kos Green Hills",
      slug: "kos-green-hills",
      price: 1500000,
      location: "Tlogomas",
      image: "/kost.png",
      facilities: ["AC", "WiFi", "Laundry"],
    },
    {
      name: "Kos Exclusive Putri Jasmine",
      slug: "kos-exclusive-putri-jasmine",
      price: 2200000,
      location: "Blimbing",
      image: "/kost.png",
      facilities: ["WiFi", "AC", "Kamar Mandi Dalam"],
    },
  ];

  res.status(200).json(properties);
}
