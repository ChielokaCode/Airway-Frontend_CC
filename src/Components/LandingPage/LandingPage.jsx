// import React from 'react';
// import './LandingPageSubcribe.css';

// const Navbar = () => (
//   <div className="navbarr">
//     <div className="logo-container">
//       <img src="src/Components/LandingPage/images/Vector-3.png" alt="Airplane Logo" className="logo-img" />
//       <span className="logo">Airway</span>
//     </div>
//     <ul className="menu">
//       <li><a href="#" className="menu-item">Home</a></li>
//       <li><a href="#" className="menu-item">About us</a></li>
//       <li><button className="button">Sign Up</button></li>
//     </ul>
//   </div>
// ); 

// const Search = () => (
//   <div className="backgroundd">
//     <div className="searchcs">
//       <div className="booking-header">
//         <button className="btnsty"><img src="src/Components/LandingPage/images/plane 1.png" alt="Flights" className="icon" /> Flights</button>
//         <button className="btnsty"><img src="src/Components/LandingPage/images/Vector.png" alt="Login" className="icon" /> Log In</button>
//       </div>
//       <div className="search-container">
//         {/* Search form content */}
//         <form className="search-form">
//           <div className="formimg"><img src="src/Components/LandingPage/images/Polygon 1.png" /></div>
//           <div className="trip-type">
//             <input type="radio" id="one-way" name="trip-type" />
//             <label htmlFor="one-way">One Way</label>
//             <input type="radio" id="round-trip" name="trip-type" checked />
//             <label htmlFor="round-trip">Round Trip</label>
//           </div>
//           <div className="form-row">
//             <div className="input-groupp">
//               <label htmlFor="from">From:</label>
//               <input type="text" id="from" placeholder="Departure" />
//             </div>
//             <div className="input-groupp">
//               <label htmlFor="to">To:</label>
//               <input type="text" id="to" placeholder="Destination" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="input-groupp">
//               <label htmlFor="departure">Departure Date</label>
//               <input type="date" id="departure" />
//             </div>
//             <div className="input-groupp">
//               <label htmlFor="return">Arrival Date</label>
//               <input type="date" id="return" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="input-group">
//               <label htmlFor="child">Child</label>
//               <select id="child">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//               </select>
//             </div>
//             <div className="input-group">
//               <label htmlFor="adult">Adult</label>
//               <select id="adult">
//                 <option>0</option>
//                 <option>1</option>
//                 <option>2</option>
//               </select>
//             </div>
//             <div className="input-group">
//               <label htmlFor="infant">Infant</label>
//               <select id="infant">
//                 <option>0</option>
//                 <option>1</option>
//                 <option>2</option>
//               </select>
//             </div>
//           </div>
//           <button className="search-button">Search Flights</button>
//         </form>
//       </div>
//     </div>
//   </div>
// );




// const Card = ({ icon, image, title, description }) => (
//   <div className="card">
//     <div className="icon"><i className={`fas ${icon}`}><img src={image} alt={title} /></i></div>
//     <div className="titlle">{title}</div>
//     <div className="descriptionn">{description}</div>
//   </div>
// );

// const Gallery = () => (
//   <div className="container">
//     <h1>Top Destinations/Cities</h1>
//     <div className="gallery">
//       <div className="item">
//         <img src="src/Components/LandingPage/images/Frame 38813845-2.png" alt="Kano" />
//         <div className="caption"></div>
//       </div>
//       <div className="item">
//         <img src="src/Components/LandingPage/images/Frame 38813846.png" alt="Benue" />
//         <div className="caption"></div>
//       </div>
//       <div className="item">
//         <img src="src/Components/LandingPage/images/Frame 38813846-2.png" alt="Angola" />
//         <div className="caption"></div>
//       </div>
//       <div className="item">
//         <img src="src/Components/LandingPage/images/Frame 38813845.png" alt="Kenya" />
//         <div className="caption"></div>
//       </div>
//       <div className="item">
//         <img src="src/Components/LandingPage/images/Frame 38813846-2.png" alt="Ghana" />
//         <div className="caption"></div>
//       </div>
//       <div className="item">
//         <img src="src/Components/LandingPage/images/Frame 38813846-3.png" alt="Morovia" />
//         <div className="caption"></div>
//       </div>
//     </div>
//   </div>
// );


// const Subscription = () => (
//   <div className="containerr">
//     <div className="image-wrapper"></div>
//     <div className="content-wrapper">
//       <div className="subscription-box">
//         <h1>Subscribe to our Newsletter</h1>
//         <p>Lorem ipsum dolor sit amet consectetur. Turpis lectus maecenas ac cras interdum
//           congue. Aliquam posuere tellus ac volutpat arcu nunc sapien platea. Venenatis
//           nec eget scelerisque mattis facilisi auctor. Proin gravida elementum magna arcu urna..</p>
//         <form className="subscription-form">
//           <input type="email" name="email" placeholder="Email Address" />
//           <button type="submit">Subscribe</button>
//         </form>
//       </div>
//     </div>
//   </div>
// );

// const Footer = () => (
//   <div className="bodi">
//     <footer>
//       <div className="footer-content">
//         <div className="footer-section brand">
//           <div className="brand-info">
//             <h2><span><img src="src/Components/LandingPage/images/Frame 27730-2.png" /></span></h2>
//             <div className="tex">Design amazing digital experiences that create more happy in the world</div>
//           </div>
//         </div>
//         <div className="footer-section links-group">
//           <div className="links-column">
//             <h4>Product</h4>
//             <ul>
//               <li><a href="#!">Overview</a></li>
//               <li><a href="#!">Features</a></li>
//               <li><a href="#!">Solutions</a><img src="src/Components/LandingPage/images/_Badge base.png" /></li>
//               <li><a href="#!">Tutorials</a></li>
//               <li><a href="#!">Pricing</a></li>
//               <li><a href="#!">Releases</a></li>
//             </ul>
//           </div>
//           <div className="links-column">
//             <h4>Company</h4>
//             <ul>
//               <li><a href="#!">About us</a></li>
//               <li><a href="#!">Career</a></li>
//               <li><a href="#!">Press</a></li>
//               <li><a href="#!">News</a></li>
//               <li><a href="#!">Media</a></li>
//               <li><a href="#!">Contact</a></li>
//             </ul>
//           </div>
//           <div className="links-column">
//             <h4>Resources</h4>
//             <ul>
//               <li><a href="#!">Blog</a></li>
//               <li><a href="#!">Newsletter</a></li>
//               <li><a href="#!">Events</a></li>
//               <li><a href="#!">Help centre</a></li>
//               <li><a href="#!">Tutorials</a></li>
//               <li><a href="#!">Support</a></li>
//             </ul>
//           </div>
//           <div className="links-column">
//             <h4>Social</h4>
//             <ul>
//               <li><a href="#!">Twitter</a></li>
//               <li><a href="#!">Facebook</a></li>
//               <li><a href="#!">LinkedIn</a></li>
//               <li><a href="#!">GitHub</a></li>
//               <li><a href="#!">AngelList</a></li>
//               <li><a href="#!">Dribbble</a></li>
//             </ul>
//           </div>
//           <div className="links-column">
//             <h4>Legal</h4>
//             <ul>
//               <li><a href="#!">Terms</a></li>
//               <li><a href="#!">Privacy</a></li>
//               <li><a href="#!">Cookies</a></li>
//               <li><a href="#!">Licenses</a></li>
//               <li><a href="#!">Settings</a></li>
//               <li><a href="#!">Contact</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2023 Airway. All rights reserved.</p>
//         <div className="social-icons">
//           <a href="#!"><img src="src/Components/LandingPage/images/Vector-5.png" /></a>
//           <a href="#!"><img src="src/Components/LandingPage/images/Group.png" /></a>
//           <a href="#!"><img src="src/Components/LandingPage/images/Vector-6.png" /></a>
//           <a href="#!"><img src="src/Components/LandingPage/images/Social icon.png" /></a>
//           <a href="#!"><img src="src/Components/LandingPage/images/Social icon-2.png" /></a>
//           <a href="#!"><img src="src/Components/LandingPage/images/Social icon-3.png" /></a>
//         </div>
//       </div>
//     </footer>
//   </div>
// );


// const App = () => (
//   <>
//     <Navbar />
//     <Search />
//     <div className="bodyy">
//       <Card icon="fa-search" image="src/Components/LandingPage/images/Featured icon.png" title="Search" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
//       <Card icon="fa-check" image="src/Components/LandingPage/images/Featured icon-3.png" title="Select" description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." />
//       <Card icon="fa-plane" image="src/Components/LandingPage/images/Featured icon-2.png" title="Book" description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui." />
//     </div>
//     <Gallery />
//     <Subscription />
//     <Footer />
//   </>
// );

// export default App;
