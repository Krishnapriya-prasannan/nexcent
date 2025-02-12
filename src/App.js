import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ClientsSection from './Components/OurClients';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ClientsSection />
    </div>
  );
}

export default App;
