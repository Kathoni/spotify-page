import React from 'react';
import '../spotify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const SpotifyLandingPage = () => {
  return (
    <div className="spotify-landing-page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="logo">Spotify</div>
    <nav>
        <ul
        style={{cursor:'pointer'}}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Download</li>
        </ul>
    </nav>
    <br />
    <button className="cta-button">LOGIN</button>
  </header>
);

const MainContent = () => (
  <main className="main-content">
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <PricingSection />
    <CallToAction />
  </main>
);

const HeroSection = () => (
  <section className="hero">
    <h1>Music for everyone.</h1>
    <p>Millions of songs and podcasts.</p>
    <button className="cta-button">Get Started</button>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="features">
    <h2>Features</h2>
    {"welcome to spotify"}
  </section>
);

const TestimonialsSection = () => (
  <section className="testimonials">
    <h2>What people are saying</h2>
    Spotify has the best music artists songs and is diverse.
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="pricing">
    <h2>Pricing</h2>
    <button
    style={{borderRadius:'15px',
        background:'#abebc6'
    }}>GET PREMIUM</button>
    <br />
    <button
    style={{
        borderRadius:'15px',
        background:'#abebc6'
    }}>BASIC PLAN</button>
  </section>
);

const CallToAction = () => (
  <section className="call-to-action">
    <h2>Ready to listen?</h2>
    <button className="cta-button">Download Now</button>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <nav>
        <ul
        style={{cursor:"pointer"}}>
            <li>About</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
        </ul>
    </nav>
    <div className="social-media">
        <ul
        style={{
            listStyle: 'none',
            alignItems:"center",
            justifyContent:"center",
            justifyItems:"initial",
            display:"flex",
            padding:"5px",
            margin: '0 15px',

        }}>
    <li >
        <i class="bi bi-instagram"></i></li>
            <li><i class="bi bi-twitter"></i></li>
            <li><i class="bi bi-linkedin"></i></li>
        </ul>
    </div>
  </footer>
);

export default SpotifyLandingPage;
