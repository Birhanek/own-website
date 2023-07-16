import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="px-5 bg-gray-200">
      <NavBar/>
      <Home/>
      <Footer/>
      
    </div>
  );
}

export default App;
