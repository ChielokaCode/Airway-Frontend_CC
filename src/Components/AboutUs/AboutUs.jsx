import React, { useState } from 'react';
import './AboutUs.css';
import emmanuelImage from '/src/assets/emma.png';
import amakaImage from '/src/assets/amaka.png';
import banjolaImage from '/src/assets/banjola.png';
import caseyImage from '/src/assets/casey.png';
import lesiImage from '/src/assets/lesi_sam.png';
import basseyImage from '/src/assets/bassey.png';
import ogodinmaImage from '/src/assets/ogodinm.png';
import vwegbaImage from '/src/assets/vwegbag.png';
import daroImage from '/src/assets/darog.png';
import oluImage from '/src/assets/olutosino.png';
import uzoImage from '/src/assets/uzomai.png';
import olaImage from '/src/assets/oladipupos.png';
import tayoImage from '/src/assets/omotayos.png';
import jamesImage from '/src/assets/james.png';
import ikeImage from '/src/assets/ike.png';
import chimeneImage from '/src/assets/chimene.png';
import preyeImage from '/src/assets/preye.png';
import boluImage from '/src/assets/bolu.png';
import desmondImage from '/src/assets/desmond.png';
import properImage from '/src/assets/proper.png';
import bukeyImage from '/src/assets/bukey.png';
import ofoImage from '/src/assets/OfofononoPic.jpg';
import topeoImage from '/src/assets/topeo.png';
import oscarImage from '/src/assets/oscar.png';
import tosinImage from '/src/assets/tosin.png';
import chielokaImage from '/src/assets/Chieloka.png';
import michealImage from '/src/assets/MichealPic.jpg';
import mikeImage from '/src/assets/ibyle.png';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const productOwner = [
        {
            name: 'Lesi Sampson',
            stack: 'Product Owner',
            imageUrl: lesiImage,
        }
    ];

    const scrumMasters = [

        {
            name: 'Ogodinma Odili',
            stack: 'Product Manager',
            imageUrl: ogodinmaImage,
        },
        {
            name: 'Vwegba Gordons',
            stack: 'Scrum Master',
            imageUrl: vwegbaImage,
        },
    ];

    const seniorDev = [
        {
            name: 'Daro Gadibia',
            stack: 'Senior Engineer',
            imageUrl: daroImage,
        },
        {
            name: 'Olutosin Olaleye',
            stack: 'Senior Engineer',
            imageUrl: oluImage,
        },
        {
            name: 'Uzoma Ibezim',
            stack: 'Senior Engineer',
            imageUrl: uzoImage,
        },
        {
            name: 'Oladipupo Shofoluwe',
            stack: 'Senior Engineer',
            imageUrl: olaImage,
        },
    ];

    const teamMembers = [
        {
            name: 'Omotayo Sobowale',
            stack: 'Java, React.js, NGROK',
            imageUrl: tayoImage,
        },
        {
            name: 'Confidence Chiamaka',
            stack: 'Java, React.js',
            imageUrl: amakaImage,
        },
        {
            name: 'Banjola Adesina',
            stack: 'Java, React.js',
            imageUrl: banjolaImage,
        },
        {
            name: 'James Adedini',
            stack: 'Java, React.js, ERD',
            imageUrl: jamesImage,
        },
        {
            name: 'Emmanuel Bobade',
            stack: 'Java, React.js, Git',
            imageUrl: emmanuelImage,
        },
        {
            name: 'Proper-Progress O.',
            stack: 'Java, React.js',
            imageUrl: properImage,
        },
        {
            name: 'Bukola Olatunji',
            stack: 'Java, React.js',
            imageUrl: bukeyImage,
        },
        {
            name: 'Ofofonono Okpoho',
            stack: 'Java, React.js, Git',
            imageUrl: ofoImage,
        },{
            name: 'Temitope Okuselu',
            stack: 'Java, React.js',
            imageUrl: topeoImage,
        },
        {
            name: 'Okechukwu Nwanze.',
            stack: 'Java, React.js, Git',
            imageUrl: oscarImage,
        },
        {
            name: 'Desmond Isama',
            stack: 'Java, React.js',
            imageUrl: desmondImage,
        },
        {
            name: 'Chieloka Madubugwu',
            stack: 'Java, React.js, Git',
            imageUrl: chielokaImage,
        },
        {
            name: 'Ikenna Amadi',
            stack: 'Java, React.js',
            imageUrl: ikeImage,
        },
        {
            name: 'Taiwo Majolagbe',
            stack: 'Java, React.js',
            imageUrl: caseyImage,
        },
        {
            name: 'Tosin Ajibade',
            stack: 'Java, React.js',
            imageUrl: tosinImage,
        },
        {
            name: 'Williams Woyenepreye',
            stack: 'Java, React.js',
            imageUrl: preyeImage,
        },
        {
            name: 'Chimene Ozuru',
            stack: 'Java, React.js',
            imageUrl: chimeneImage,
        },
        {
            name: 'Micheal Sotunde',
            stack: 'Java, React.js',
            imageUrl: mikeImage,
        },{
            name: 'Boluwatife Adesanya',
            stack: 'Java, React.js',
            imageUrl: boluImage,
        },
        {
            name: 'Bassey Bassey',
            stack: 'Java, React.js',
            imageUrl: basseyImage,
        },
        {
            name: 'Micheal Sotunde',
            stack: 'Java, React.js',
            imageUrl: michealImage,
        },
    ];

    const tabs = [
        { title: 'Product Owner', content: productOwner },
        { title: 'Scrum Masters', content: scrumMasters },
        { title: 'Stack Lead/Associates', content: seniorDev },
        { title: 'Engineers', content: teamMembers },
    ];

    return (
        <div className="about-us">
            <div className="h2-about">Meet Our Team</div>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'active' : ''}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="team-members">
                {tabs[activeTab].content.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.imageUrl} alt={member.name} />
                        <div className="member-details">
                            <h3 className="h3-about">{member.name}</h3>
                            <p className="p-about">{member.stack}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
