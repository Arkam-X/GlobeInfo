import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-logo">GlobeInfo</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
