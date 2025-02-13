import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ClientsSection from './Components/OurClients';
import MembershipSection from './Components/Membership';
import FeatureSection from './Components/Feature';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ClientsSection />
      <MembershipSection />
      <FeatureSection />
    </div>
  );
}

export default App;
