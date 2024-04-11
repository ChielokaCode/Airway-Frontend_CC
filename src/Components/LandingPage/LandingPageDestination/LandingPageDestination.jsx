import React from 'react';
import './LandingPageDestination.css';
import BenueCard from "/src/assets/BenueCard.png"
import kanoCard from "/src/assets/KanoCard.png"
import AngolaCard from "/src/assets/AngolaCard.png"
import KenyaCard from "/src/assets/KenyaCard.png"
import GhanaCard from  "/src/assets/GhanaCard.png"
import MoroviaCard from "/src/assets/MoroviaCard.png"
const Gallery = () => (
    <div className="dest-container">
      <div className="htop1">Top Destinations/Cities</div> 
      <div className="gallery">
        <div className="item">
          <img className='dest-item-image' src={kanoCard} alt="Kano" />
          <div className="caption"></div>
        </div>
        <div className="item">
          <img className='dest-item-image' src={BenueCard} alt="Benue" />
          <div className="caption"></div>
        </div>
        <div className="item">
          <img className='dest-item-image' src={AngolaCard} alt="Angola" />
          <div className="caption"></div>
        </div>
        <div className="item">
          <img className='dest-item-image' src={KenyaCard} alt="Kenya" />
          <div className="caption"></div>
        </div>
        <div className="item">
          <img className='dest-item-image' src={GhanaCard} alt="Ghana" />
          <div className="caption"></div>
        </div>
        <div className="item">
          <img className='dest-item-image' src={MoroviaCard} alt="Morovia" />
          <div className="caption"></div>
        </div>
      </div>
    </div>
);
export default Gallery;