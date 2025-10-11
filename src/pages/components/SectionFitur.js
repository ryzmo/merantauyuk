import { Section, Card } from "./UI";

export default function SectionFitur() {
  return (
    <Section
      id="fitur"
      title="Fitur Unggulan MerantauYuk!"
      subtitle="Menjawab kebutuhan mahasiswa perantau dari pencarian kos, keamanan transaksi, hingga layanan harian."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold">🎯 Survei Kos Jarak Jauh</h3>
          <p className="mt-2 text-white/75">
            Mahasiswa part-time membantu survei kos secara real-time dengan foto, video, atau live call — memastikan kondisi sesuai kenyataan.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">🏠 Listing Kos Detail</h3>
          <p className="mt-2 text-white/75">
            Informasi lengkap seputar harga, fasilitas, lokasi, dan ulasan penghuni agar kamu bisa membandingkan dengan mudah.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">🧺 Laundry Terdekat & Termurah</h3>
          <p className="mt-2 text-white/75">
            Temukan rekomendasi laundry sekitar dengan harga bersaing dan ulasan pengguna lain.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">💳 Sistem Escrow (Rekber)</h3>
          <p className="mt-2 text-white/75">
            Pembayaran aman dan transparan — uang disimpan sementara hingga pengguna memastikan layanan sesuai.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">🧹 Jasa Cleaning Kos</h3>
          <p className="mt-2 text-white/75">
            Layanan bersih-bersih harian atau bulanan dari mitra terpercaya yang mudah dipesan lewat platform.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">♻️ Marketplace Barang Bekas</h3>
          <p className="mt-2 text-white/75">
            Jual-beli perlengkapan bekas pakai (meja, kursi, seprai, alat masak, dll) di komunitas perantau.
          </p>
        </Card>
      </div>
    </Section>
  );
}
