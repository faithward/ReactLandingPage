import React from "react";

let menu =[
    {label: 'Home', url: '/home'},
    {label:'About', url:'/about'},
    {label:'Services', url:'/services'},
    {label: 'Contact', url: '/contact'}
];

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light ms-5" href="#">
          Hello
        </a>
        {/* Toggler when screen changes */}
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">=</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar Items */}
          <ul className="navbar-nav ms-auto me-5">
            {navBarItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const navBarItems = menu.map((item) => (
    <li className="nav-item">
    <a className="nav-link text-light" href={item.url}>
    {item.label}
    </a>
    </li>
    ));

export default Navbar;
