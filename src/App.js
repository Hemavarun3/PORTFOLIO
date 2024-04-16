import React from 'react';
import { Outlet} from 'react-router-dom'; // Import Routes and Navigate from react-router-dom for React 18 compatibility
import Header from './components/Header/Navbar';
import Footer from './components/Footer/footer';


function App() {
  return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
