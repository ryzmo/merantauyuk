import Nav from "../components/Nav";
import ExplorePage from "./dashboard";
import CityInsightMalang from "../components/CityInsightMalang";
import Header from "../components/Nav";
import CityHighlight from "../components/CityHighlight";
import FilterBar from "../components/FilterBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Nav /> */}
      <Header />
      <CityHighlight />
      <div className="max-w-6xl mb-4 mx-auto">
          <FilterBar />
        </div>
      <CityInsightMalang />
      
    </div>
  );
}
