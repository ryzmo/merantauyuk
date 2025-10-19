import CityInsightMalang from "../components/CityInsightMalang";
import Header from "../components/Nav";
import CityHighlight from "../components/CityHighlight";
import FilterBar from "../components/FilterBar";
import PropertyShowcase from "@/components/PropertyShowcase";
import SurveyService from "@/components/Survey";
import CityMapSection from "@/components/CityMapSection";
import FeatureCTASection from "@/components/FeatureCTASection";
import FooterElegant from "@/components/Footer";

export default function Home() {
  console.log({
  Header,
  CityHighlight,
  FilterBar,
  CityInsightMalang,
  PropertyShowcase,
  SurveyService,
  CityMapSection,
  FeatureCTASection,
  FooterElegant,
});

  return (
    <div className="min-h-screen bg-white">
      {/* <Nav /> */}
      <Header />
      <CityHighlight />
      <div className="max-w-6xl mb-4 mx-auto">
          <FilterBar />
        </div>
      <CityInsightMalang />
      <PropertyShowcase />
      <SurveyService />
      <CityMapSection />
      <FeatureCTASection />
      <FooterElegant />

      
    </div>
  );
}
