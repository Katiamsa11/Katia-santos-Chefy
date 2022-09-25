import React from "react";
import "../LandingPage/LandingPage.scss";
import { TabTitle } from "../../utils/Utils";
import pan from "../../assets/images/pan.png";
import pepper from "../../assets/images/pepper.png";
import { Link } from "react-router-dom";
import listIcon from "../../assets/icons/list-icon.svg";
import chefHatIcon from "../../assets/icons/chef-hat.png";
import wineIcon from "../../assets/icons/wine-glass-icon.svg";
import chef1 from "../../assets/chefs-images/chef-01.jpg";
import chef2 from "../../assets/chefs-images/chef-02.jpg";
import chef3 from "../../assets/chefs-images/chef-03.jpg";
import img4 from "../../assets/images/img-04.jpg";
import img5 from "../../assets/images/img-05.jpg";
import img13 from "../../assets/images/img-13.jpg";
import serving from "../../assets/images/chef-serving.jpeg";
import katia from "../../assets/images/katia.jpeg";

import "aos/dist/aos.css";
import AOS from "aos";

function LandingPage() {
  //function to change tab title dinamically
  TabTitle("Landing Page");

  AOS.init();

  return (
    <div className="landing">
      <section className="landing__hero-section">
        <img className="landing__hero-img landing__hero-pan" src={pan} alt="chef sauteing"/>
        <div className="landing__hero-text">
          <h1 className="landing__hero-title">chefy.</h1>
          <h2 className="landing__slogan">chefs delivered</h2>
          <Link to="/" className="landing__hero-link">
            <div className="landing__hero-button">
              <h4 className="landing__button-title">Get Started</h4>
            </div>
          </Link>
          <p className="landing__hero-paragraph">Learn More</p>
          <p className="landing__hero-paragraph">↓</p>
        </div>
        <div className="landing__pepper-container">
          <img className="landing__hero-img landing__hero-pepper" src={pepper} alt="chef seasoning" />
        </div>
      </section>
      <section data-aos="fade-up" className="intro">
        <div className="intro__text">
          <h2 className="intro__heading">about chefy.</h2>
          <p className="intro__paragraph">
            chefy is a web-based platform to connect chefs with households for
            private in-home dining experiences. Whether an intimate dinner for 2
            or small at home gathering, chefy connects chefs and clients and
            assists with scheduling, menu selection, safe payment – all in one
            convenient place.
          </p>
        </div>
        <img
          className="intro__img"
          src={serving}
          alt="chef serving table of people"
        />
      </section>
      <section className="landing__photo-section">
        <img
          data-aos="fade-up-right"
          className="landing__photo landing__photo1"
          src={chef1}
          alt="a chef"
        />
        <img
          data-aos="fade-up-right"
          className="landing__photo landing__photo2"
          src={img4}
          alt="a chef"
        />
        <img
          data-aos="fade-up-left"
          className="landing__photo landing__photo3"
          src={chef2}
          alt="a chef"
        />
        <img
          data-aos="fade-up-left"
          className="landing__photo landing__photo4"
          src={img13}
          alt="a chef"
        />
        <img
          data-aos="fade-up-left"
          className="landing__photo landing__photo5"
          src={chef3}
          alt="a chef"
        />
        <img
          data-aos="fade-up-right"
          className="landing__photo landing__photo6"
          src={img5}
          alt="a chef"
        />
      </section>
      <section className="landing__section">
        <h2 data-aos="fade-up" className="landing__steps-header">
          how it works
        </h2>
        <div className="landing__steps-container">
          <div data-aos="fade-up" data-aos-delay="300" className="landing__box">
            <img className="landing__icon" src={listIcon} alt="list" />
            <div className="landing__text-box">
              <h3 className="landing__subheader">select a chef</h3>
              <p className="landing__description">
                Explore different chefs to learn more about their specialties and experience. Filter through chefs in your city to find the perfect match for your event. 
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="landing__box landing__box-cta"
          >
            <img
              className="landing__icon"
              src={chefHatIcon}
              alt="moving chef hat"
            />
            <div className="landing__text-box">
              <h3 className="landing__subheader">submit your preferences</h3>
              <p className="landing__description">
                Once you have selected a chef - tell them more about your event including number of guests, dietary restrictions and special instructions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="900" className="landing__box">
            <img className="landing__icon" src={wineIcon} alt="wine glass" />
            <div className="landing__text-box">
              <h3 className="landing__subheader">bon appétit</h3>
              <p className="landing__description">
                The chef you selected will come to your home with all necessary ingredients and cook a delicious meal for you and your guests to enjoy.
              </p>
            </div>
          </div>
        </div>
        <Link to="/" className="landing__hero-link landing__steps-link">
          <div className="landing__hero-button landing__steps-button">
            <h4 className="landing__button-title landing__steps-link">
              Get Started
            </h4>
          </div>
        </Link>
      </section>
      <section data-aos="fade-up" className="me">
        <img className="me__img" src={katia} alt="katia santos" />
        <div className="me__text">
          <h2 className="me__header">about me</h2>
          <p className="me__paragraph">
            In June 2020 I launched my own private catering business. With very
            little advertising I was quickly overwhelmed with the immense demand
            for my services. I accepted private catering events for groups of 2
            to 10 people. I corresponded with clients via email and phone but
            with so many requests, I could barely keep up with emails let alone
            plan menus and execute the events. Simultaneously, I had many
            friends and previous coworkers from the culinary industry reaching
            out looking for work. These were talented and creative chefs that
            just didn’t know how to get started.
          </p>
          <p>
            It became very clear to me that there is huge demand for private
            chef services. There is also a growing number of chefs looking for
            more flexible hours, fair compensation and opportunity to connect
            with clients.
          </p>
          <p>chefy bridges the gap.</p>
          <div className="me__signature-container">
            <p className="me__signature">Katia Santos, Founder</p>
            <p className="me__logo">chefy.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default LandingPage;