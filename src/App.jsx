import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import aboutImage from "../aboutImage.png";

function MainHeader() {
  return (
    <header>
      <Link className="logo" to={"/"}>
        #VANLIFE
      </Link>
      <div>
        <Link className="link" to={"/about"}>
          About
        </Link>
        <Link className="link" to={"/vans"}>
          Vans
        </Link>
      </div>
    </header>
  );
}

function MidSection() {
  return (
    <section className="home">
      <div className="home-container">
        <h1 className="home-title">
          You got the travel plans, we got the travel vans
        </h1>
        <p className="home-p">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="home-button">Find your van</button>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <MidSection />
    </>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-img">
        <img src={aboutImage} alt="Van image" />
      </div>
      <div className="about-info">
        <h1 className="about-info-title">
          Don´t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about-info-p">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch(Hitch costs extra 😉)
        </p>
        <p className="about-info-p">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-cta-container">
          <h2 className="cta-container-text">Your destination is waiting.</h2>
          <h2 className="cta-container-text">Your van is ready.</h2>
          <button className="cta-container-button">Explore our vans</button>
        </div>
      </div>
    </section>
  );
}

function Footer({ children }) {
  return (
    <footer>
      <p>{children}</p>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer>2022 #VANLIFE</Footer>
      </main>
    </BrowserRouter>
  );
}
