import React from 'react';
import './LandingPageFooter.css';
import { Link } from 'react-router-dom';
import landingFooterLogo from "/src/assets/LandingFooterLogo.png"
import badgeNew from "/src/assets/badge-new.png"
import LandingTwitter from "/src/assets/LandingTwitter.png"
import LandingLinkln from "/src/assets/LandingLinkIn.png"
import LandingFaceBook from "/src/assets/LandingFacebook.png"
import LandingGitHub from "/src/assets/LandingGitHub.png"
import LandingSocial from "/src/assets/LandingSocial.png"
import LandingWeb from "/src/assets/LandingWeb.png"
const Footer = () => (
    <div className='footer-main-container'>
        <div className="bodi">
            <div className="footer-content">
                <img className='footer-logo' src={landingFooterLogo} />
                <div className="tex">Design amazing digital experiences that create more happy in the world</div>
                <div className="footer-section links-group">
                    <div className="links-column">
                        <h4>Product</h4>
                        <ul >
                            <li><Link to={"#"}>Overview</Link></li>
                            <li><Link to={"#"}>Features</Link></li>
                            <li className='extra'><Link to={"#"}>Solutions</Link><img src={badgeNew} /></li>
                            <li><Link to={"#"}>Tutorials</Link></li>
                            <li><Link to={"#"}>Pricing</Link></li>
                            <li><Link to={"#"}>Releases</Link></li>
                        </ul>
                    </div>

                    <div className="links-column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to={"#"}>About us</Link></li>
                            <li><Link to={"#"}>Career</Link></li>
                            <li><Link to={"#"}>Press</Link></li>
                            <li><Link to={"#"}>News</Link></li>
                            <li><Link to={"#"}>Media</Link></li>
                            <li><Link to={"#"}>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="links-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to={"#"}>Blog</Link></li>
                            <li><Link to={"#"}>Newsletter</Link></li>
                            <li><Link to={"#"}>Events</Link></li>
                            <li><Link to={"#"}>Help centre</Link></li>
                            <li><Link to={"#"}>Tutorials</Link></li>
                            <li><Link to={"#"}>Support</Link></li>
                        </ul>
                    </div>

                    <div className="links-column">
                        <h4>Social</h4>
                        <ul>
                            <li><Link to={"#"}>Twitter</Link></li>
                            <li><Link to={"#"}>Facebook</Link></li>
                            <li><Link to={"#"}>LinkedIn</Link></li>
                            <li><Link to={"#"}>GitHub</Link></li>
                            <li><Link to={"#"}>AngelList</Link></li>
                            <li><Link to={"#"}>Dribbble</Link></li>
                        </ul>
                    </div>

                    <div className="links-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to={"#"}>Terms</Link></li>
                            <li><Link to={"#"}>Privacy</Link></li>
                            <li><Link to={"#"}>Cookies</Link></li>
                            <li><Link to={"#"}>Licenses</Link></li>
                            <li><Link to={"#"}>Settings</Link></li>
                            <li><Link to={"#"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
   
        <div className="footer-bottom">
          <div className="pp">&copy; 2023 Airway. All rights reserved.</div>
            <div className="social-icons">
                <Link to={"#"}><img src={LandingTwitter} /></Link>
                <Link to={"#"}><img src={LandingLinkln} /></Link>
                <Link to={"#"}><img src={LandingFaceBook}/></Link>
                <Link to={"#"}><img src={LandingGitHub} /></Link>
                <Link to={"#"}><img src={LandingSocial} /></Link>
                <Link to={"#"}><img src={LandingWeb} /></Link>
            </div>
        </div>
    </div>
);
export default Footer;