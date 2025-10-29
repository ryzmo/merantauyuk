// pages/api/marketplace.js

export default function handler(req, res) {
  const items = [
    {
      id: 1,
      title: "Sepeda Lipat Bekas",
      slug: "sepeda-lipat-bekas",
      price: 750000,
      location: "Lowokwaru",
      category: "WTS", // Want To Sell
      image: "/market/bike.jpg",
      desc: "Sepeda lipat kondisi 90%, jarang dipakai. Siap pakai!",
      date: "2025-10-15",
    },
    {
      id: 2,
      title: "Cari Laptop Bekas",
      slug: "cari-laptop-bekas",
      price: 5000000,
      location: "Dinoyo",
      category: "WTB", // Want To Buy
      image: "/market/laptop.jpg",
      desc: "Saya mencari laptop second dengan RAM minimal 8GB.",
      date: "2025-10-10",
    },
    {
      id: 3,
      title: "Kasur Busa - Diberikan Gratis",
      slug: "kasur-busa-diberikan-gratis",
      price: 0,
      location: "Blimbing",
      category: "WTG", // Want To Give
      image: "/market/mattress.jpg",
      desc: "Kasur bekas tapi masih layak. Ambil sendiri ke rumah.",
      date: "2025-10-18",
    },
    {
      id: 4,
      title: "Kamera Canon 600D",
      slug: "kamera-canon-600d",
      price: 2500000,
      location: "Tlogomas",
      category: "WTS",
      image: "/market/camera.jpg",
      desc: "Kamera DSLR second, kondisi masih bagus, include lensa kit.",
      date: "2025-10-14",
    },
    {
      id: 5,
      title: "Ingin Tukar Helm dengan Jaket",
      slug: "ingin-tukar-helm-dengan-jaket",
      price: 0,
      location: "Sukun",
      category: "EXCHANGE", // Tukar barang
      image: "/market/helmet.jpg",
      desc: "WTG/WTT: tukar helm half-face dengan jaket kulit.",
      date: "2025-10-12",
    },
  ];

  res.status(200).json(items);
}
