import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ClientsSection from './Components/OurClients';
import MembershipSection from './Components/Membership';
import FeatureSection from './Components/Feature';
import StatsSection from './Components/Stats';
import HowToDesignSection from './Components/How';
import CustomerSection from './Components/Customer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ClientsSection />
      <MembershipSection />
      <FeatureSection />
      <StatsSection />
      <HowToDesignSection />
      <CustomerSection />
    </div>
  );
}

export default App;
