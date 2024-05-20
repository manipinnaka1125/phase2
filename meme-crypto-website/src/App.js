import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tokenomics from './pages/Tokenomics';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header> 
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/Home' element={<Home/>}exact/>
          <Route path='/About' element={<About/>}exact/>
          <Route path='/Tokenomics' element={<Tokenomics/>}exact/>
          <Route path='/Roadmap' element={<Roadmap/>}exact/>
          <Route path='/Contact' element={<Contact/>}exact/>
        </Routes>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
