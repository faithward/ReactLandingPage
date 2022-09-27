import React from "react";
import Cardbox from "./cardbox.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Jumbotron />
        <Cardbox />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
