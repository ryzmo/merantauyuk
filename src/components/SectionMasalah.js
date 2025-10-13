import { Section, Card } from "./UI";

export default function SectionMasalah() {
  return (
    <Section id="masalah" title="Masalah utama saat merantau">
      <div className="grid gap-6 md:grid-cols-3">
        <Card><p>Informasi kos online sering tidak akurat atau menyesatkan.</p></Card>
        <Card><p>Datang survei langsung ke tempat kos membutuhkan biaya, waktu, dan tenaga ekstra.</p></Card>
        <Card><p>Mahasiswa perantau kesulitan menemukan layanan pendukung untuk kehidupan sehari-hari.</p></Card>
      </div>
    </Section>
  );
}
