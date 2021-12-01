import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main, Footer, Header } from './containers';

function App() {
  return (
    <div className="cryptoverse">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
