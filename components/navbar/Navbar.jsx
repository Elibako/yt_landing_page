import { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="src/assets/logo.svg" alt="Logo" />
        </div>
        <ul className={`nav-links ${navActive ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contributors</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className='portfoliobtn'>Portfolio Here</button> {/* Button moved here */}
        <div className="burger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
