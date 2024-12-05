import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

//import layouts
import HeaderFooter from '@layouts/HeaderFooter';

//import pages
import Home from '@pages/Home';
import AboutUs from '@pages/AboutUs';
import Contact from '@pages/Contact';

function App() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <Routes>
      <Route element={<HeaderFooter activeLink={activeLink} setActiveLink={setActiveLink}/>}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
