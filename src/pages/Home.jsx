import React from "react";
import spades_front_02 from '../assets/images/home/spades_front_02.png';
import diamonds_right_02 from '../assets/images/home/diamonds_right_02.png';
import spades_right_01 from '../assets/images/home/spades_right_01.png';
import hearts_angle1_01 from '../assets/images/home/hearts_angle1_01.png';
import spades_front_03 from '../assets/images/home/spades_front_03.png';
import diamonds_right_01 from '../assets/images/home/diamonds_right_01.png';
import diamonds_left_01 from '../assets/images/home/diamonds_left_01.png';
import hearts_right_01 from '../assets/images/home/hearts_right_01.png';
import spades_front_01 from '../assets/images/home/spades_front_01.png';
import clubs_angle1_01 from '../assets/images/home/clubs_angle1_01.png';
import blur from '../assets/images/home/blur.png';
import iphone from '../assets/images/home/iphone.png';
import { TwitterIcon, DiscordIcon, LinkTreeIcon } from "../components/Icons";

const Home = () => {
  return (
    <div className="page-main">
      <div className="bottom-header">
        <div className="container mx-auto px-4">
          <ul>
            <li><TwitterIcon /></li>
            <li><DiscordIcon /></li>
            <li><LinkTreeIcon /></li>
            <li><span>Blog</span></li>
          </ul>
        </div>
      </div>
      <div className="section-hero">
        <div className="animation-blur">
          <img src={blur} alt="" />
        </div>
        <div className="animation-pattern">
          <img className="spades_front_02" src={spades_front_02} alt="" />
          <img className="diamonds_right_02" src={diamonds_right_02} alt="" />
          <img className="spades_right_01" src={spades_right_01} alt="" />
          <img className="hearts_angle1_01" src={hearts_angle1_01} alt="" />
          <img className="spades_front_03" src={spades_front_03} alt="" />
          <img className="diamonds_right_01" src={diamonds_right_01} alt="" />
          <img className="diamonds_left_01" src={diamonds_left_01} alt="" />
          <img className="hearts_right_01" src={hearts_right_01} alt="" />
          <img className="spades_front_01" src={spades_front_01} alt="" />
          <img className="clubs_angle1_01" src={clubs_angle1_01} alt="" />
        </div>
        <div className="iphone">
          <img src={iphone} alt="" />
        </div>
        <div className="content">
          <div className="container mx-auto px-4 py-4">
            <h2>GamebleFi, SocialFi,<br/>Move & Earn</h2>
            <p>Show-up 15 mins/day<br/>Weshow you how to earn</p>
            <div>
              <button className="btn"><span>Play and Win</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
