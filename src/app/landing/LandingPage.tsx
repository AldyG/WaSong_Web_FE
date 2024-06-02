"use client";
import React from "react";
import "../../styles/landingpage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const LandingPage = () => {
return (
    <div className="home">
        <div className="overlap-wrapper">
            <div className="overlap">
                <div className="overlap-group">
                    <p className="p">
                        Giving you the best music education there is to offer! Fun and creativity combined together in a perfect
                        melody for you to increase your skills!
                    </p>
                    <p className="text-wrapper-2">Start your Music Learning Journey Now!</p>
                    <div className="group-2">
                        <div className="text-wrapper-3">Best teachers</div>
                        <div className="text-wrapper-4">Advanced musical scores</div>
                        <div className="text-wrapper-5">Easy-to-learn lessons</div>
                        <img className="teenyicons-tick" alt="Teenyicons tick" src="/images/teenyicons-tick-circle-solid.svg" />
                        <img className="teenyicons-tick-2" alt="Teenyicons tick" src="/images/teenyicons-tick-circle-solid-1.svg" />
              <img className="teenyicons-tick-3" alt="Teenyicons tick" src="/images/teenyicons-tick-circle-solid-2.svg" />
            </div>
          </div>
          <div className="overlap-2">
            <img className="screenshot-2" alt="Screenshot" src="/images/screenshot-2024-05-03-at-18-20-2.png" />
            <img className="screenshot-4" alt="Screenshot" src="/images/Screenshot_2024-05-03_at_18.15 1.png" />
          </div>
          <div className="navbar">
            <div className="text-wrapper-6">Home</div>
            <div className="text-wrapper-7">About us</div>
            <div className="text-wrapper-8">Our Service</div>
            <div className="text-wrapper-9">Contact us</div>
          </div>
          <div className="group-icons">
            <div className="twitter-wrapper">
              <a href="https://twitter.com/AldyAlexanderss" target="_blank">
                <FontAwesomeIcon icon={faTwitter} color="black" size="2xl"/>
              </a>
            </div>
            <div className="instagram-wrapper">
              <a href="https://instagram.com/aldyganesen" target="_blank">
                <FontAwesomeIcon icon={faInstagram} color="black" size="2xl"/>
              </a>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <img alt="Logo" src="/images/wasong-logo.png" />
          </div>
          <button className="bg-black hover:bg-blue-700 text-white font-bold border border-blue-700 rounded absolute bottom-5 right-4 w-1/2 h-10">
            <a href="/register">
                <div>
                    Register Now
                </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;