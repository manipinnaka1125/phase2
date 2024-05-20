import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';



import { Route, Routes } from 'react-router-dom';
import WalletList from './pages/WalletList';
import Community from './pages/Community';
import CryptoCoinPenimedia from './pages/CryptoCoinPenimedia';

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
          <Route path='/WalletList' element={<WalletList/>}exact/>
          <Route path='/Community' element={<Community/>}exact/>
          <Route path='/CryptoCoinPenimedia' element={<CryptoCoinPenimedia/>}exact/>
        </Routes>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
