import './App.css';
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Reasons from './components/Reasons/Reasons'
import Plans from './components/Plans/Plans'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
         <Hero/>
         <Program/>
         <Reasons/>
         <Plans/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
  