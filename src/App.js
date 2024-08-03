import logo from './logo.svg';
import './App.css';
import Index from './Routes/Index';
import { UserContext } from './Context/CreateContext';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import { useContext } from 'react';
function App() {
  const { user } = useContext(UserContext);
  return (
    <>
    <Nav  />
    <Index />
    <Footer />
    </>
  );
}

export default App;
