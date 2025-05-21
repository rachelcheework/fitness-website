import {useState} from 'react';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import './index.css';

function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      {/* HERO */}
      <section id="hero">
        {/* Hero Container */}
          <div className="max-w-6xl mx-auto p-6 md:py-12 md:px-6">
            {/* Menu/Logo Container */}
            <nav className="flex items-center justify-between text-white">
              {/* Logo */}
              {/* <img src="/images/logo.svg" className='w-1/2 z-40 md:w-fit' alt="" /> */}
              <a href="#">
                <h1 className='w-1/2 z-40 text-3xl font-extrabold text-white md:w-fit'>LEGIONE</h1>
              </a>
              {/* Menu */}
              <div className='hidden items-center space-x-12 font-bold md:flex'>
                <div className='group'>
                  <a href="#">HOME</a>
                  <div className="mx-2 group-hover:border-b-2 group-hover:border-gray-50"></div>
                </div>
                <div className='group'>
                  <a href="#classes" className='text-darkGray'>CLASSES</a>
                  <div className="mx-2 group-hover:border-b-2 group-hover:border-darkGray"></div>
                </div>
                <div className='group'>
                  <a href="#packages" className='text-darkGray'>PACKAGES</a>
                  <div className="mx-2 group-hover:border-b-2 group-hover:border-darkGray"></div>
                </div>
                <div className='group'>
                  <a href="#">TEAM</a>
                  <div className="mx-2 group-hover:border-b-2 group-hover:border-gray-50"></div>
                </div>
                <div className='group'>
                  <a href="#">FAQ</a>
                  <div className="mx-2 group-hover:border-b-2 group-hover:border-gray-50"></div>
                </div>
                <div className='group'>
                  <a href="#footer">CONTACT</a>
                  <div className="mx-2 group-hover:border-b-2 group-hover:border-gray-50"></div>
                </div>
              </div>

              {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button id="menu-btn" className={`z-40 block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}
                    onClick={navToggle}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
            id="menu"
            className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-darkGray ${isOpen ? 'flex' : 'hidden'}`}
            >
                <a href="#" className="hover:text-darkGreen">Home</a>
                <a href="#" className="hover:text-darkGreen">Classes</a>
                <a href="#" className="hover:text-darkGreen">Packages</a>
                <a href="#" className="hover:text-darkGreen">Team</a>
                <a href="#" className="hover:text-darkGreen">FAQ</a>
                <a href="#" className="hover:text-darkGreen">CONTACT</a>
             </div>

            {/* Hero Content Container */}
            <div className="flex items-center justify-center mt-44 mb-44 text-white">
              <div className='text-center'>
                <p className='text-xl font-light md:text-3xl'>This is where</p>
                <p className='text-3xl md:text-6xl font-bold'>power meets unity</p>
              </div>
            </div>
          </div>
      </section>

      {/* Intro */}
      <section id="intro" className="w-full bg-white">
        {/* Intro Container */}
        <div className="max-w-6xl mx-auto flex flex-col space-y-6 p-12 text-center md:py-24 md:px-6">
          {/* Intro Text */}
          <div className='pb-6 md:w-fit md:mx-auto'>
            <h5 className='text-2xl font-bold text-darkGreen md:text-4xl '>LEGIONE is more than just a studio</h5>
            <div className="border-b-4 mt-4 mx-12 border-darkGreen"></div>
          </div>
          <p className='text-xl font-light text-darkGray md:text-2xl'>It’s a proving ground for your potential.</p>
          <p className='text-xl font-light text-darkGray md:text-2xl'> Step inside and join a community fuelled by purpose, resilience, and the pursuit of personal excellence.</p>
        </div>
      </section>
      
     {/* CLASSES */}
      <section id="classes" className='w-full bg-darkGray'>
        {/* Classes Container */}
        <div className="max-w-6xl mx-auto flex flex-col space-y-6 p-12 text-center md:py-24 md:px-6 md:space-y-12">
          <h2 className='text-white'>Our Classes</h2>
          {/* Cards Container */}
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            {/* Item 1 */}
            <div className="flex flex-col space-y-3 items-center md:w-1/3 md:px-3">
              <img src="images/spin.jpg" alt="" />
              <h3 className='pb-2 text-4xl font-bold text-white italic uppercase md:text-5xl'>Spin</h3>
              <p className='text-m font-light text-center text-white md:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quae?</p>
              {/* Link Container */}
              <a 
              href="#"
              className="cta-btn mx-6 bg-darkGreen text-white hover:bg-white hover:text-darkGreen"
              >
                Learn More
              </a>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col space-y-3 items-center md:w-1/3 md:px-3">
              <img src="images/spin.jpg" alt="" />
              <h3 className='pb-2 text-4xl font-bold text-white italic uppercase md:text-5xl'>Yoga</h3>
              <p className='text-m font-light text-center text-white md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, autem.</p>
              {/* Link Container */}
              <a 
              href="#"
              className="cta-btn mx-6 bg-darkGreen text-white hover:bg-white hover:text-darkGreen"
              >
                Learn More
              </a>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col space-y-3 items-center md:w-1/3 md:px-3">
              <img src="images/spin.jpg" alt="" />
              <h3 className='pb-2  text-4xl font-bold text-white italic uppercase md:text-5xl'>Reform</h3>
              <p className='text-m font-light text-center text-white md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, illum.</p>
              {/* Link Container */}
              <a 
              href="#"
              className="cta-btn mx-6 bg-darkGreen text-white hover:bg-white hover:text-darkGreen"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages">
        {/* Packages Container */}
        <div className='max-w-6xl mx-auto flex flex-col space-y-6 p-12 text-center md:py-24 md:px-6 md:space-y-12 bg-white'>
          <h2 className='text-darkGray md:text-left'>Packages</h2>
          {/* Cards Container */}
          <div className="flex flex-col space-y-24">
            {/* Item 1 */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <img src="images/yoga.jpg" className='md:w-1/2' alt="" />
              <div className="flex flex-col space-y-3 text-center text-darkGray md:w-1/2 md:text-left md:p-12 md:justify-between">
                <h3 className="text-lg font-medium uppercase md:text-4xl">Visiting our studio for the first time?</h3>
                <p className="text-m font-light md:text-2xl">Try a class before committing</p>
                <a 
                href='#'
                className="cta-btn w-fit bg-darkGray text-white hover:bg-darkGreen"
                >
                  Book a trial class now
                </a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col flex-col-reverse space-y-3 md:flex-row md:space-y-0 md:space-x-6">
              <div className="flex flex-col space-y-3 text-center text-darkGray md:w-1/2 md:text-left md:p-12 md:justify-between">
                <h3 className="text-lg font-medium uppercase md:text-4xl">Ready to hit your fitness goals?</h3>
                <p className="text-m font-light md:text-2xl">Book any class, anytime with no restrictions.</p>
                <a
                href='#'
                className="cta-btn w-fit bg-darkGray text-white hover:bg-darkGreen"
                >
                  Purchase class packages here
                </a>
              </div>
              <img src="images/yoga.jpg" className='md:w-1/2' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location">
        {/* Location Container */}
        <div className="max-w-6xl mx-auto p-12 md:px-6 md:py-24">
          <div className="flex flex-col items-center justify-center px-6 py-3 space-y-3 bg-darkGray/70 text-center text-white md:p-24 md:space-y-6">
            <h2>Join Us at</h2>
            <h3 className='text-xl font-light italic md:text-2xl'>139 Cecil Street</h3>
            <h3 className='text-xl font-light italic md:text-2xl'>YSY Building, #11-01</h3>
            <h3 className='text-xl font-light italic mb-48 md:text-2xl'>Singapore 069539</h3>
          </div>
        </div>
      </section>
     
      {/* Footer */}
      <section id="footer" className='w-full bg-darkGray'>
        {/* Footer Container */}
        <footer className="max-w-6xl mx-auto flex flex-col p-12 space-y-10 justify-center md:justify-between text-white md:flex-row md:space-x-6 md:space-y-0 md:py-12 md:px-6">

          {/* Contact Column */}
          <div className="space-y-3 text-left md:w-1/3  md:space-y-6">
            <h3 className='text-lg font-bold text-center capitalise md:text-xl md:text-left'>CONTACT</h3>
            {/* Links Container */}
            <div className='space-y-2 text-m font-light text-center md:space-y-3 md:text-lg md:text-left'>
              <h4 className='font-bold capitalise text-darkGreen'>LEGIONE</h4>
              <div className="group">
                <p className='group-hover:text-darkGreen'>139 Cecil Street, YSL Building, #11-01</p>
                <p className='group-hover:text-darkGreen'> Singapore 069539</p>
              </div>
              <p className="hover:text-darkGreen">+65 82215045</p>
              <p className='hover:text-darkGreen'>hello@legioneofficial.com</p>
            </div>
          </div>

                    
          {/* Quick Links Column */}
          <div className="space-y-3 md:text-left md:w-1/3 md:space-y-6">
            <h3 className='text-lg font-bold text-center capitalise md:text-xl md:text-left'>QUICK LINKS</h3>
            {/* Links Container */}
            <div className='flex flex-col space-y-2 text-m font-light text-center md:space-y-4 md:text-lg md:text-left'>
              <a className="hover:text-darkGreen" href="#">Class Schedule</a>
              <a className="hover:text-darkGreen" href="#">Book a class</a>
              <a className="hover:text-darkGreen" href="#">FAQ</a>
              <a className="hover:text-darkGreen" href="#">Careers</a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="space-y-3 md:text-left md:w-1/3 md:space-y-6">
            <h3 className='text-lg font-bold text-center capitalise md:text-xl md:text-left'>SOCIALS</h3>
            {/* Links Container */}
            <div className='flex flex-col space-y-2 text-m font-light items-center md:space-y-4 md:text-lg md:items-start'>
              <div className="group flex items-center space-x-3 mb-10">
                <img src="images/instagram.png" className='h-5' alt="instagram logo" />
                <a className="group-hover:text-darkGreen" href="#">@legioneofficial</a>
              </div>
              <p className='text-center text-darkGreen font-medium md:text-left'>© 2025 LEGIONE ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </footer>
      </section>
      <BackToTopButton />
     </div>
  );
}

export default Home;
