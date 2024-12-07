import React from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';  // This line imports MainPage as default
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
